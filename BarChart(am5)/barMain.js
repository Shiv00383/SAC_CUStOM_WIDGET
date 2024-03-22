var getScriptPromisify = (src) => {
  return new Promise((resolve) => {
    $.getScript(src, resolve);
  });
};
var check = true;
var xAxis = undefined;
var yAxis = undefined;
var chart = undefined;
var series = undefined;
var data = undefined;
var cursor = undefined;
(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <style>
    </style>
    <div id="root" style="width: 100%; height: 500px;"></div>
    `;
  class bar extends HTMLElement {
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
      // this.render(this._root);
      // this.render();
    }
    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };

    }
    
    onCustomWidgetAfterUpdate(changedProperties) {

      // if(changedProperties["myDataBindings"].state == "success"){
      //   check = true;
      // }
      // else{
      //   false
      // }

      this._myDataBinding = changedProperties["myDataBindings"];
      // if(check){
        this.render(check,changedProperties["myDataBindings"]);
      // }      
      
    }

    async render(_props, _myDataBinding) {

      // await getScriptPromisify("https://cdn.amcharts.com/lib/5/index.js");
      // await getScriptPromisify("https://cdn.amcharts.com/lib/5/xy.js");
      // await getScriptPromisify("https://cdn.amcharts.com/lib/5/themes/Animated.js");

      console.log(_myDataBinding);
      if (_myDataBinding.state != "success") {
        return;
      }else{
        check = true;
      }
    //   if (this.chart) {
    //     this.chart.dispose();
    // }
    this._root.innerHTML = '';
      if (check == true) {
        await getScriptPromisify("https://cdn.amcharts.com/lib/5/index.js");
      await getScriptPromisify("https://cdn.amcharts.com/lib/5/xy.js");
      await getScriptPromisify("https://cdn.amcharts.com/lib/5/themes/Animated.js");
      // root.container.children.clear();
        // const maybeDisposeRoot = (rootElement) => {
        //   am5.array.each(am5.registry.rootElements, function (root) {
        //     if (root.dom == rootElement) {
        //       // root.dispose();
        //       root.container.children.clear();
        //     }
            
        //   });
        // }
        // const chart = (rootElement) => {
          // maybeDisposeRoot(rootElement);
          var root = am5.Root.new(this._root);
          root.setThemes([
            am5themes_Animated.new(root)
          ]);
          var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true,
            paddingLeft: 0,
            paddingRight: 1
          }));
          this.chart = chart;
          var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
          cursor.lineY.set("visible", false);

          var xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,
            minorGridEnabled: true
          })

          xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
          });

          xRenderer.grid.template.setAll({
            location: 1
          })

          var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "Region",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
          }));

          var yRenderer = am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
          })

          var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: yRenderer
          }));

          var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "Sales",
            sequencedInterpolation: true,
            categoryXField: "Region",
            tooltip: am5.Tooltip.new(root, {
              labelText: "{valueY}"
            })
          }));

          series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
          series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
          });

          series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
          });

          const dimension = this._myDataBinding.metadata.feeds.dimensions.values[0];
          console.log(dimension)
          const measure = this._myDataBinding.metadata.feeds.measures.values[0];
          console.log(measure)
          const d = this._myDataBinding.data.map((data) => {
            return {
              Region: data[dimension].label,
              Sales: data[measure].raw
            }
          }).sort(function (a, b) {
            return a.value - b.value
          })
          console.log(d)
          data = d
          series.appear(1000);
          chart.appear(1000, 100);

          xAxis.data.setAll(data);
          series.data.setAll(data);
        // }
        // chart(this._root);
        check = false;
      }

    }
  }
  customElements.define("custom-bar-chart", bar);
})();