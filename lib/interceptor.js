function __modify(obj, key, value) {
  for (var k in obj) {
    if (k === key) {
      obj[k] = value;
      return true;
    }
    if (typeof obj[k] === "object") {
      __modify(obj[k], key, value);
    }
  }

  return false;
}

class TRequest {
  constructor(data, method, url) {
    this.data = data;
    this.method = method;
    this.url = url;

    this.modify = this.modify.bind(this);
  }

  modify(key, value) {
    return __modify(this.data, key, value);
  }
}

// By: https://stackoverflow.com/questions/60199655/overridding-xmlhttprequest-prototype-for-chrome-extension
var _open = XMLHttpRequest.prototype.open;

window.XMLHttpRequest.prototype.open = function (method, url) {
  var _onreadystatechange = this.onreadystatechange,
    _this = this;
  _this.onreadystatechange = function () {
    if (
      _this.readyState === 4 &&
      _this.status === 200 &&
      ~url.indexOf("twitter.com/i/api")
    ) {
      var data = JSON.parse(_this.responseText);

      const req = new TRequest(data, method, url);
      bettertwt.emit("twt_fetch", req);
      Object.defineProperty(_this, "responseText", {
        value: JSON.stringify(req.data),
      });
    }
    if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
  };

  Object.defineProperty(this, "onreadystatechange", {
    get: function () {
      return _onreadystatechange;
    },
    set: function (value) {
      _onreadystatechange = value;
    },
  });

  return _open.apply(_this, arguments);
};
