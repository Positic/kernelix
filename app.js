//Ext.onReady(function(){        Kernelix.launch();});

Ext.Loader.setConfig({enabled:true});

//Ext.define('Kernelix', {
Ext.application({
    name: 'Kernelix',
    requires: ['Kernelix.desktop'],
    appFolder: (typeof(Kernelix_libDomain) !=="undefined" ?Kernelix_libDomain+"app":""),
    
    launch: function() {

        Kernelix.libDomain = (typeof(Kernelix_libDomain) !=="undefined" ?Kernelix_libDomain:"");

        Kernelix.initScript = (typeof(Kernelix_initScript) !=="undefined" ?Kernelix_initScript:"");
        if(Kernelix.initScript) eval(Kernelix.initScript);
        
        Kernelix.initFunction = (typeof(Kernelix_initFunction) !=="undefined" ?Kernelix_initFunction:"");
        if(Kernelix.initFunction) Kernelix.initFunction.call(this);
        
        Kernelix.placeViewPortEl = Ext.get('klx');
        Kernelix.desk = Ext.create('Kernelix.desktop', {
            id: 'klxDesktop',
            renderTo: Kernelix.placeViewPortEl
            //hidden: Kernelix.libDomain?true:false
        });
        
        if(!Kernelix.placeViewPortEl && !Kernelix.libDomain){
            this.viewport = Ext.create('Ext.container.Viewport', {
              layout: 'fit',
              id: 'klxViewport',
              items: [ Kernelix.desk ]
            });
        }    
    	Kernelix.desk.start();
    	
    }
    
    
});