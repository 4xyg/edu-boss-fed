let myPlugins = {};
myPlugins.install = function (Vue, options) {
        console.log(options);

        //全局指令
    Vue.directive(options.name,(element,params) => {
        console.log('执行')
        console.log(element,params);
        
    });
}
export default myPlugins;