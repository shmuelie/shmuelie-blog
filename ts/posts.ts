import * as WinJS from 'winjs'

export interface BlogEntry {
    url: string;
    summary: string;
    title: string;
    posted: Date;
    tags: string[];
}

export const posts = new WinJS.Binding.List<BlogEntry>([
    { title: "Let Minecraft use ALL THE RAM", posted: new Date(2018, 5, 5, 21, 52), summary: "", url: "posts/2018/6/let-minecraft-use-all-the-ram.htm", tags: ["minecraft"] },
    { title: "HoloLens", posted: new Date(2015, 4, 19, 4, 12), summary: "", url: "posts/2015/5/hololens.htm", tags: ["microsoft", "hololens", "unity3d"] },
    { title: "Cross Platform UI", posted: new Date(2015, 3, 23, 23, 46), summary: "", url: "posts/2015/4/cross-platform-ui.htm", tags: ["oss", "crossplatform", "gui", "monogame", ".net", "mono", "html5"] },
    { title: "Using Node Tools for Visual Studio to Work on Command Line Tools", posted: new Date(2015, 3, 2, 4, 39), summary: "", url: "posts/2015/4/using-node-tools-for-visual-studio-to-work-on.htm", tags: ["nodejs", "Visual Studio", "ntvs", "cli"] },
    { title: "Setup Script", posted: new Date(2015, 1, 16, 2, 43), summary: "", url: "posts/2015/2/setup-script.htm", tags: ["PowerShell", "Automation", "ScriptCS"] },
    { title: "Generics and Enums", posted: new Date(2014, 9, 26, 4, 55), summary: "", url: "posts/2014/10/generics-and-enums.htm", tags: ["generics", "enum", "csharp"] },
    { title: "Code on the Go - Architecture", posted: new Date(2014, 5, 15, 2, 35), summary: "", url: "posts/2014/6/code-on-the-go-architecture.htm", tags: ["codeonthego", "mvc", "mvvm", "amd", "model-view-controller", "model-view-viewmodel"] },
    { title: "Code on the Go - Libraries", posted: new Date(2014, 4, 29, 3, 24), summary: "", url: "posts/2014/5/code-on-the-go-libraries.htm", tags: ["codeonthego", "CodeMirror", "esprima", "knockoutjs", "winjs", "almond", "orion", "Continuum"] },
    { title: "Leaving Avalon for WPFLight", posted: new Date(2014, 4, 20, 3, 58), summary: "", url: "posts/2014/5/leaving-avalon-for-wpflight.htm", tags: ["avalonui", "wpflight", "XNA", "monogame"] },
    { title: "Code on the Go - Origins", posted: new Date(2014, 4, 16, 22, 36), summary: "", url: "posts/2014/5/code-on-the-go-origins.htm", tags: ["codeonthego", "winjs", "knockoutjs", "almond", "CodeMirror", "esprima", "orion", "Continuum"] },
    { title: "Code on the Go Develpoment Series", posted: new Date(2014, 4, 9, 5, 18), summary: "", url: "posts/2014/5/code-on-the-go-develpoment-series.htm", tags: ["codeonthego", "winjs", "knockoutjs", "almond", "codemirror", "esprima", "orion", "continuum"] },
    { title: "MonoGame.Js", posted: new Date(2014, 1, 4, 22, 28), summary: "", url: "posts/2014/2/monogamejs.htm", tags: ["monogame", "javascript", "monogamejs"] },
    { title: "Learning Linux", posted: new Date(2014, 0, 22, 0, 17), summary: "", url: "posts/2014/1/learninglinux.htm", tags: ["learning", "linux", "fedora", "debian", "slackware", "python", "mysql", "apache"] },
    { title: "Windows 9 Prediction", posted: new Date(2013, 11, 27, 2, 6), summary: "", url: "posts/2013/12/windows9prediction.htm", tags: ["windows 9", "predictions"] },
    { title: "Windows Phone 8 GDR3 and IPv6", posted: new Date(2013, 11, 14, 23, 29), summary: "", url: "posts/2013/12/windowsphone8gdr3andipv6.htm", tags: ["windows phone", "gdr3", "ipv6"] },
    { title: "Microsoft's iPod Touch... Finally", posted: new Date(2013, 11, 12, 0, 58), summary: "", url: "posts/2013/12/microsoftsipodtouchfinally.htm", tags: ["windows phone", "ipod touch"] },
    { title: "Windows RT Experiment", posted: new Date(2013, 11, 12, 0, 44), summary: "", url: "posts/2013/12/windowsrtexperiment.htm", tags: ["Windows RT"] },
    { title: ".NET Micro Framwork and Visual Studio 2013", posted: new Date(2013, 10, 11, 3, 3), summary: "", url: "posts/2013/11/netmicroframworkandvisualstudio2013.htm", tags: ["microframework", "dotnet", ".net", "Visual Studio", "Visual Studio 2013", "agentwatch"] },
    { title: "Microsoft, ARM, and Windows RT", posted: new Date(2013, 9, 30, 20, 50), summary: "", url: "posts/2013/10/microsoftarmandwindowsrt.htm", tags: ["microsoft", "Windows RT", "arm", "chromebook", "windows server"] },
    { title: "What Microsoft Could But Will Never Do With MS Accounts", posted: new Date(2013, 9, 22, 1, 34), summary: "", url: "posts/2013/10/whatmicrosoftcouldbutwillneverdowithmsaccounts.htm", tags: ["microsoft", "Windows", "opinion"] },
    { title: "Why I Was Gone So Long", posted: new Date(2013, 9, 21, 21, 40), summary: "", url: "posts/2013/10/whyiwasgonesolong.htm", tags: [] },
    { title: "MonoGame .NETMF for AGENT Smartwatch Faces", posted: new Date(2013, 9, 20, 20, 22), summary: "", url: "posts/2013/10/monogamenetmfforagentsmartwatchfaces.htm", tags: ["monogame", "dotnet", "agentwatch"] },
    { title: ".NET, Cross-Platform, and Me", posted: new Date(2013, 6, 25, 15, 38), summary: "", url: "posts/2013/7/netcross-platformandme.htm", tags: [".net", "mono", "crossplatform"] },
    { title: "Build 23 Days Late", posted: new Date(2013, 6, 23, 16, 14), summary: "", url: "posts/2013/7/build23dayslate.htm", tags: ["bldwin", "microsoft", "build"] },
    { title: "Day 0 At Build", posted: new Date(2013, 5, 26, 8, 17), summary: "", url: "posts/2013/6/day0atbuild.htm", tags: ["bldwin", "microsoft", "build"] },
    { title: "MonoGame on the AGENT Watch", posted: new Date(2013, 5, 25, 4, 16), summary: "", url: "posts/2013/6/monogameontheagentwatch.htm", tags: ["monogame", "mono", "agentwatch", "microframework"] },
    { title: "Going to Build!", posted: new Date(2013, 5, 25, 2, 33), summary: "", url: "posts/2013/6/goingtobuild.htm", tags: ["microsoft", "build", "bldwin"] },
    { title: "Why I Think There Is No Office for iPad", posted: new Date(2013, 5, 17, 14, 25), summary: "", url: "posts/2013/6/whyithinkthereisnoofficeforipad.htm", tags: ["microsoft", "office", "ipad", "opinion"] },
    { title: "Windows Azure and WebAPI Upgrader Update", posted: new Date(2013, 5, 12, 21, 25), summary: "", url: "posts/2013/6/windowsazureandwebapiupgraderupdate.htm", tags: ["windows azure", "WebAPI", "code", "csharp"] },
    { title: "Windows 8.1 Idea: Add a \"Desktop First\" Mode", posted: new Date(2013, 3, 26, 5, 43), summary: "", url: "posts/2013/4/windows81ideaaddadesktopfirstmode.htm", tags: ["windows 8", "Windows", "ideas"] },
    { title: "Custom HTTP Methods in WebAPI", posted: new Date(2013, 3, 8, 17, 48), summary: "", url: "posts/2013/4/customhttpmethodsinwebapi.htm", tags: ["WebAPI", "http"] },
    { title: "Home Server Update", posted: new Date(2013, 3, 5, 18, 36), summary: "", url: "posts/2013/4/homeserverupdate.htm", tags: ["server", "network"] },
    { title: "MonoGame and Portable Class Libaries", posted: new Date(2013, 2, 28, 18, 2), summary: "", url: "posts/2013/3/monogameandportableclasslibaries.htm", tags: ["monogame", "pcl"] },
    { title: "Using Office365 and Outlook to Replace Google Reader", posted: new Date(2013, 2, 13, 23, 39), summary: "", url: "posts/2013/3/usingoffice365andoutlooktoreplacegooglereader.htm", tags: [] },
    { title: "Getting the OSX Version in Mono", posted: new Date(2013, 2, 13, 4, 56), summary: "", url: "posts/2013/3/gettingtheosxversioninmono.htm", tags: ["osx", "mono"] },
    { title: "Building a Program Updater with Windows Azure and WebAPI: Part 1", posted: new Date(2013, 2, 12, 2, 0), summary: "", url: "posts/2013/3/buildingaprogramupdaterwithwindowsazureandwebapipart1.htm", tags: ["windows azure", "webapi", "code", "csharp"] },
    { title: "JavaScript: Object Literal vs. Classes", posted: new Date(2013, 2, 7, 21, 41), summary: "", url: "posts/2013/3/javascriptobjectliteralvsclasses.htm", tags: ["javascript", "code"] },
    { title: "Tumblr Description Twitter Links", posted: new Date(2013, 1, 25, 3, 23), summary: "", url: "posts/2013/2/tumblrdescriptiontwitterlinks.htm", tags: ["tumblr", "code", "javascript"] },
    { title: "Create a Menu on OSX in MonoGame", posted: new Date(2013, 1, 3, 22, 49), summary: "", url: "posts/2013/2/createamenuonosxinmonogame.htm", tags: ["mono", "monogame", "osx"] },
    { title: "Windows Needs its Floppy Driver", posted: new Date(2013, 0, 31, 18, 56), summary: "", url: "posts/2013/1/windowsneedsitsfloppydriver.htm", tags: ["windows", "bsod", "windows 7"] },
    { title: "Anonyms Functions: Mono Style", posted: new Date(2013, 0, 30, 21, 53), summary: "", url: "posts/2013/1/anonymsfunctionsmonostyle.htm", tags: ["Mono", "CSharp", "javascript", ".NET"] },
    { title: "Importing Resources When Porting to Mono", posted: new Date(2013, 0, 30, 20, 28), summary: "", url: "posts/2013/1/importingresourceswhenportingtomono.htm", tags: ["Mono", "CSharp", "Porting"] },
    { title: "Using Office365 for Email", posted: new Date(2013, 0, 27, 3, 3), summary: "", url: "posts/2013/1/usingoffice365foremail.htm", tags: ["Office 365", "Email"] },
    { title: "Staples: A lesson in how to do a Windows 8 ad WRONG", posted: new Date(2013, 0, 9, 3, 20), summary: "", url: "posts/2013/1/staplesalessoninhowtodoawindows8adwrong.htm", tags: ["windows 8", "Ad", "Staples"] },
    { title: "XNA and Cross-Thread UI", posted: new Date(2013, 0, 7, 3, 24), summary: "", url: "posts/2013/1/xnaandcrossthreadui.htm", tags: ["XNA", "Threading", "UI"] },
    { title: "Code in Tumblr", posted: new Date(2013, 0, 4, 0, 53), summary: "", url: "posts/2013/1/codeintumblr.htm", tags: ["code", "Tumblr", "javascript"] },
    { title: "Office 365 and Outlook 2013: How to avoid a headache", posted: new Date(2013, 0, 1, 5, 56), summary: "", url: "posts/2013/1/office365andoutlook2013howtoavoidaheadache.htm", tags: ["Outlook", "Office 365"] },
    { title: "Office on iOS Doesn�t Mean That The Windows RT and Phone Can�t Win", posted: new Date(2012, 11, 10, 22, 20), summary: "", url: "posts/2012/12/office-on-ios-doesnt-mean-that-the-windows-rt-and.htm", tags: ["Office", "iOS", "Windows RT", "Windows Phone"] },
    { title: "Outlook/Exchange/Office365 rules for Twitter and Facebook Emails", posted: new Date(2012, 11, 6, 2, 24), summary: "", url: "posts/2012/12/outlookexchangeoffice365-rules-for-twitter-and.htm", tags: ["Exchange", "Twitter", "Outlook", "Facebook", "Offi", "Office 365"] },
    { title: "The Quest for the Right Office365 Plan", posted: new Date(2012, 10, 18, 0, 56), summary: "", url: "posts/2012/11/the-quest-for-the-right-office365-plan.htm", tags: ["SkyDrive", "Email", "Outlook", "Outlook/Hotmail", "Office 365"] },
    { title: "XNA and Visual Studio 2012", posted: new Date(2012, 10, 13, 5, 55), summary: "", url: "posts/2012/11/xna-and-visual-studio-2012.htm", tags: ["Visual Studio", "Windows 8", "XNA", "Visual Studio 2012", "Visual Studio 2013"] },
    { title: "My Home Network Update: Part 3 � Server�s Job", posted: new Date(2012, 10, 13, 3, 31), summary: "", url: "posts/2012/11/my-home-network-update-part-3-servers-job.htm", tags: ["Server", "Network"] },
    { title: "Windows RT and Offline Files", posted: new Date(2012, 10, 6, 16, 55), summary: "", url: "posts/2012/11/windows-rt-and-offline-files.htm", tags: ["Windows RT", "Offline Files", "Hack", "Network"] },
    { title: "Why I am the Biggest Windows Phone Fan", posted: new Date(2012, 9, 22, 5, 4), summary: "", url: "posts/2012/10/why-i-am-the-biggest-windows-phone-fan.htm", tags: ["Windows Phone"] },
    { title: "My Home Network Update: Part 2.5 � Sever OS Decided", posted: new Date(2012, 9, 5, 19, 29), summary: "", url: "posts/2012/10/my-home-network-update-part-25-sever-os.htm", tags: ["Server", "Network"] },
    { title: "A Quick Do Not Track Side Note", posted: new Date(2012, 9, 4, 16, 59), summary: "", url: "posts/2012/10/a-quick-do-not-track-side-note.htm", tags: ["DNT", "Do Not Track"] },
    { title: "Do Not Track In English", posted: new Date(2012, 9, 4, 14, 1), summary: "", url: "posts/2012/10/do-not-track-in-english.htm", tags: ["DNT", "W3C", "Do Not Track"] },
    { title: "Fiddler Scripts � Black/White List Sites", posted: new Date(2012, 9, 3, 20, 17), summary: "", url: "posts/2012/10/fiddler-scripts-blackwhite-list-sites.htm", tags: ["Fiddler", "JScript", "Javascript"] },
    { title: "Do Not Track and Reality", posted: new Date(2012, 9, 3, 13, 50), summary: "", url: "posts/2012/10/do-not-track-and-reality.htm", tags: ["DNT", "ANA", "W3C", "Ed Bott", "Do Not Track", "Association of National Advertisers"] },
    { title: "eBooks are Great! (Except to Me)", posted: new Date(2012, 9, 3, 0, 57), summary: "", url: "posts/2012/10/ebooks-are-great-except-to-me.htm", tags: ["eBook", "Book", "Paper"] },
    { title: "My Home Network Update: Part 2 � Server OS", posted: new Date(2012, 8, 28, 2, 27), summary: "", url: "posts/2012/9/my-home-network-update-part-2-server-os.htm", tags: ["Server", "Network"] },
    { title: "My Home Network Upgrade: Part 1 � Current Status", posted: new Date(2012, 8, 24, 2, 34), summary: "", url: "posts/2012/9/my-home-network-upgrade-part-1-current-status.htm", tags: ["Server", "Network"] },
    { title: "EmptyCollection Thoughts", posted: new Date(2012, 7, 31, 22, 57), summary: "", url: "posts/2012/8/emptycollection-thoughts.htm", tags: ["Code", "C"] },
    { title: "EmptyCollection", posted: new Date(2012, 7, 28, 5, 58), summary: "", url: "posts/2012/8/emptycollection.htm", tags: ["Code", "C"] },
    { title: "Google�s Chrome OS and Oracle�s Network Computer", posted: new Date(2012, 3, 15, 23, 22), summary: "", url: "posts/2012/4/googles-chrome-os-and-oracles-network-computer.htm", tags: ["Google", "Oracle", "Paper", "Chrome OS"] },
    { title: "JavaScript Array Help", posted: new Date(2012, 1, 22, 5, 11), summary: "", url: "posts/2012/2/javascript-array-help.htm", tags: ["Javascript"] },
    { title: "Fiddler Scripts � Text Append", posted: new Date(2012, 1, 22, 4, 13), summary: "", url: "posts/2012/2/fiddler-scripts-text-append.htm", tags: ["Fiddler", "JScript", "Javascript"] },
    { title: "Fiddler Scripts � Replace Text", posted: new Date(2012, 1, 14, 6, 27), summary: "", url: "posts/2012/2/fiddler-scripts-replace-text.htm", tags: ["Fiddler", "JScript", "Javascript"] },
    { title: "Fiddler Scripts � Intro", posted: new Date(2012, 1, 13, 4, 32), summary: "", url: "posts/2012/2/fiddler-scripts-intro.htm", tags: ["Fiddler", "JScript", "Javascript"] },
    { title: "Why IE6 Usage Going Up May Not Be A Bad Thing", posted: new Date(2012, 1, 3, 6, 46), summary: "", url: "posts/2012/2/why-ie6-usage-going-up-may-not-be-a-bad-thing.htm", tags: ["IE6", "IE"] },
    { title: "Google Search Results Fixer", posted: new Date(2012, 0, 22, 21, 54), summary: "", url: "posts/2012/1/google-search-results-fixer.htm", tags: ["Google", "Javascript", "Hack"] },
    { title: "Zune Store is not Networkable", posted: new Date(2011, 5, 14, 3, 13), summary: "", url: "posts/2011/6/zune-store-is-not-networkable.htm", tags: ["Zune", "Network"] },
    { title: "Middlesex County College Library Wireless Auto Login", posted: new Date(2011, 1, 7, 20, 26), summary: "", url: "posts/2011/2/middlesex-county-college-library-wireless-auto.htm", tags: ["Self Plug"] },
    { title: "The Man Know as BG2", posted: new Date(2011, 0, 18, 6, 42), summary: "", url: "posts/2011/1/the-man-know-as-bg2.htm", tags: ["About"] }
]);
export const postByUrl = posts.createGrouped(function (x) { return x.url; }, function (x) { return x; });

export const postsSortedByDate = posts.createSorted(function (left, right) { return right.posted.getTime() - left.posted.getTime(); });