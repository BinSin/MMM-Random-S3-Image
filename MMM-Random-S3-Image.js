/*
 * Author : BinSin
 * https://github.com/BinSin/MMM-Random-S3-Image:
 */

Module.register("MMM-Random-S3-Image", {
  defaults: {
	Bucket: 'YOUR_BUCKET_NAME',
	ACL: 'ACCESS_CONTROL_LIST',
  },

  start: function() {
	var self = this;
	Log.log("Starting module: " + this.name);
	this.image = null;
	this.emotion = null;
	setInterval(function() {
		self.sendSocketNotification("
  },

  getDom: function() {

  },

  socketNotificationReceived: function(notification, payload) {
	var self = this;
	if(notification == "CHANGE_IMAGE") {
		this.image = payload.image;
		this.emotion = payload.emotion;
		console.log("success change image : " +  payload.image + ", " + payload.emotion);
		updateDom(1000);
	}
  },

});
