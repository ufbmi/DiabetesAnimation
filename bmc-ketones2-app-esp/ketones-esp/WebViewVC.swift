import UIKit

final class WebViewVC: UIViewController {

    @IBOutlet weak var webViewUI: UIWebView!

    private var first = true

    override func viewDidLoad() {
        super.viewDidLoad()

        webViewUI.allowsInlineMediaPlayback = true
        webViewUI.mediaPlaybackRequiresUserAction = false
        webViewUI.suppressesIncrementalRendering = true

        webViewUI.scrollView.scrollEnabled = false
        webViewUI.scrollView.delaysContentTouches = false
        webViewUI.scrollView.canCancelContentTouches = false
        webViewUI.scrollView.contentSize = self.view.frame.size
    }

    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        performSelector("loadContent", withObject: nil, afterDelay: 0.075)
    }

    final func loadContent() {
        //webViewUI.loadRequest(NSURLRequest(URL: NSURL(fileURLWithPath: NSBundle.mainBundle().pathForResource("site/index", ofType:"html")!)))
        let rootURL = NSURL(fileURLWithPath: NSBundle.mainBundle().bundlePath+"/site", isDirectory:true)
        webViewUI.loadHTMLString("<!DOCTYPE html><html><head><meta charset='UTF-8'><title></title><script src='jquery-1.8.2.min.js'></script><script src='storytext.min.js'></script><script src='index.min.js'></script><script src='createjs/easeljs-0.7.1.min.js'></script><script src='createjs/tweenjs-0.5.1.min.js'></script><script src='createjs/movieclip-0.7.1.min.js'></script><script src='createjs/preloadjs-0.4.1.min.js'></script><script src='createjs/soundjs-0.5.2.min.js'></script><script src='ketones_www.js'></script><link rel='stylesheet' type='text/css' href='index.min.css' /></head><body onload='init();'><div id='content'><p id='storytxt'>&nbsp;</p><canvas id='canvas' width='1024' height='768'></canvas></div></body></html>", baseURL: rootURL)
    }

    override func prefersStatusBarHidden() -> Bool { return true }

    override func didReceiveMemoryWarning() { super.didReceiveMemoryWarning() }
}
