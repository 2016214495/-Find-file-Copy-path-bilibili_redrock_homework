;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M868.352 227.9936l-232.6016 0L868.352 47.104l-36.1984-36.1984-270.6944 217.088L434.176 227.9936 253.2864 47.104 217.088 83.3024l133.8368 144.7424L144.7424 228.0448C64.8192 227.9936 0 292.8128 0 372.736l0 506.5216C0 959.1808 64.8192 1024 144.7424 1024L868.352 1024c79.9232 0 144.7424-64.8192 144.7424-144.7424L1013.0944 372.736C1013.0944 292.8128 948.2752 227.9936 868.352 227.9936zM940.6976 879.2576c0 39.9872-32.4096 72.3456-72.3456 72.3456L144.7424 951.6032c-39.9872 0-72.3456-32.4096-72.3456-72.3456L72.3968 372.736c0-39.9872 32.4096-72.3456 72.3456-72.3456L868.352 300.3904c39.9872 0 72.3456 32.4096 72.3456 72.3456L940.6976 879.2576z"  ></path>' +
    '' +
    '<path d="M796.0064 372.736 217.088 372.736c-39.9872 0-72.3456 32.4096-72.3456 72.3456l0 361.8304c0 39.9872 32.4096 72.3456 72.3456 72.3456l578.9184 0c39.9872 0 72.3456-32.4096 72.3456-72.3456L868.352 445.0816C868.352 405.1456 835.9424 372.736 796.0064 372.736zM796.0064 770.7136c0 19.968-16.1792 36.1984-36.1984 36.1984L253.2864 806.912c-19.968 0-36.1984-16.1792-36.1984-36.1984L217.088 481.28c0-19.968 16.1792-36.1984 36.1984-36.1984l506.5216 0c19.968 0 36.1984 16.1792 36.1984 36.1984L796.0064 770.7136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)