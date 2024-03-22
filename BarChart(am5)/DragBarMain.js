var getScriptPromisify = (src) => {
    return new Promise((resolve) => {
        $.getScript(src, resolve);
    });
};
(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    </style>
    <div id="root" style="width: 100%; height: 400px;"></div>
    `;
    class DragBox extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._root = this._shadowRoot.getElementById("root");

            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
            this._props = {};
            this.render();

        }
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            this._myDataBinding = changedProperties["myDataBindings"];

        }

        async render(_props){
            await getScriptPromisify("https://cdn.amcharts.com/lib/5/index.js");
            await getScriptPromisify("https://cdn.amcharts.com/lib/5/xy.js");
            await getScriptPromisify("https://cdn.amcharts.com/lib/5/themes/Animated.js");

            var root = am5.Root.new(this._root);
            var myTheme = am5.Theme.new(root);
            myTheme.rule("Grid", ["base"]).setAll({
                strokeOpacity: 0.1
              });

              root.setThemes([
                am5themes_Animated.new(root),
                myTheme
              ]);
            
              var chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                  panX: false,
                  panY: false,
                  wheelX: "none",
                  wheelY: "none",
                  paddingLeft: 0
                })
              );
              var yRenderer = am5xy.AxisRendererY.new(root, {
                minGridDistance: 30,
                minorGridEnabled: true
              });
              yRenderer.grid.template.set("location", 1);

              var yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                  maxDeviation: 0,
                  categoryField: "Region",
                  renderer: yRenderer
                })
              );
              var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                  maxDeviation: 0,
                  min: 0,
                  renderer: am5xy.AxisRendererX.new(root, {
                    visible: true,
                    strokeOpacity: 0.1,
                    minGridDistance: 80
                  })
                })
              );
              var series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                  name: "Series 1",
                  xAxis: xAxis,
                  yAxis: yAxis,
                  valueXField: "Sales",
                  sequencedInterpolation: true,
                  categoryYField: "Region"
                })
              );
              var columnTemplate = series.columns.template;
              columnTemplate.setAll({
                draggable: true,
                cursorOverStyle: "pointer",
                tooltipText: "drag to rearrange",
                cornerRadiusBR: 10,
                cornerRadiusTR: 10,
                strokeOpacity: 0
              });
              columnTemplate.adapters.add("fill", (fill, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
              });
              columnTemplate.adapters.add("stroke", (stroke, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
              });
              
              columnTemplate.events.on("dragstop", () => {
                sortCategoryAxis();
              });

              function getSeriesItem(category) {
                for (var i = 0; i < series.dataItems.length; i++) {
                  var dataItem = series.dataItems[i];
                  if (dataItem.get("categoryY") == category) {
                    return dataItem;
                  }
                }
              }

            function sortCategoryAxis(){
                series.dataItem.sort(function(x,y){
                    return y.get("graphics").y()-x.get("graphics").y();
                });

                var easing = am5.ease.out(am5.ease.cubic);

                am5.array.each(yAxis.dataItem, function(dataItem){
                    var seriesDataItem = getSeriesItem(dataItem.get("category"));

                    if(seriesDataItem){
                        var index = series.dataItem.indexOf(seriesDataItem);

                        var column = seriesDataItem.get("graphics");

                        var fy = yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) - column.height()/2;

                        if(index != dataItem.get("index")){
                            dataItem.set("index",index);

                            var x = column.x();
                            var y = column.y();

                            column.set("dy",-(fy-y));
                            column.set("dx",x);

                            column.animate({key:"dy", to:0, duration:600, easing:easing});
                            column.animate({ key: "dx", to: 0, duration: 600, easing: easing });

                        }else{
                            column.animate({ key: "y", to: fy, duration: 600, easing: easing });
                            column.animate({ key: "x", to: 0, duration: 600, easing: easing });
                        }
                    }
                });

                yAxis.dataItem.sort(function(x,y){
                    return x.get("index") - y.get("index");
                });
            }

            const dimension = this._myDataBinding.metadata.feeds.dimensions.values[0];
                      console.log(dimension)
                      const measure = this._myDataBinding.metadata.feeds.measures.values[0];
                      console.log(measure)
                      const d = this._myDataBinding.data.map((data)=>{
                        return {
                            Region : data[dimension].label,
                            Sales : data[measure].raw
                        }
                      }).sort(function(a, b){
                        return a.value - b.value
                      })
                      console.log(d)

            var data = d;
            
            // [{
            //     country: "USA",
            //     value: 2025
            //   }, {
            //     country: "China",
            //     value: 1882
            //   }, {
            //     country: "Japan",
            //     value: 1809
            //   }, {
            //     country: "Germany",
            //     value: 1322
            //   }, {
            //     country: "UK",
            //     value: 1122
            //   }];

              yAxis.data.setAll(data);
series.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);
              
        }
    }
    customElements.define("com-sap-sample-coloredbox", DragBox);
})();
