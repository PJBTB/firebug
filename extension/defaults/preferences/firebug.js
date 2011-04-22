// For a detailed description of all preferences see http://getfirebug.com/wiki/index.php/Firebug_Preferences

// Global
pref("extensions.firebug.architecture", "inProcess");

pref("javascript.options.strict.debug", false);
pref("extensions.firebug.defaultPanelName", "html");
pref("extensions.firebug.throttleMessages", true);
pref("extensions.firebug.textSize", 0);
pref("extensions.firebug.showInfoTips", true);
pref("extensions.firebug.textWrapWidth", 100);
pref("extensions.firebug.openInWindow", false);
pref("extensions.firebug.previousPlacement", 0);
pref("extensions.firebug.showErrorCount", true);
pref("extensions.firebug.viewPanelOrient", false);
pref("extensions.firebug.allPagesActivation", "none");
pref("extensions.firebug.hiddenPanels", "");
pref("extensions.firebug.panelTabMinWidth", 50);
pref("extensions.firebug.sourceLinkLabelWidth", 17);
pref("extensions.firebug.currentVersion", "");
pref("extensions.firebug.useDefaultLocale", false);
pref("extensions.firebug.activateSameOrigin", true);
pref("extensions.firebug.toolbarCustomizationDone", false);
pref("extensions.firebug.addonBarOpened", false);
pref("extensions.firebug.showBreakNotification", true);
pref("extensions.firebug.showStatusIcon", true);

// Command line
pref("extensions.firebug.largeCommandLine", false);
pref("extensions.firebug.alwaysShowCommandLine", false);

// Search
pref("extensions.firebug.searchCaseSensitive", false);
pref("extensions.firebug.searchGlobal", true);
pref("extensions.firebug.searchUseRegularExpression", false);

pref("extensions.firebug.netSearchHeaders", false);
pref("extensions.firebug.netSearchParameters", false);
pref("extensions.firebug.netSearchResponseBody", false);

// Console
pref("extensions.firebug.showJSErrors", true);
pref("extensions.firebug.showJSWarnings", false);
pref("extensions.firebug.showCSSErrors", false);
pref("extensions.firebug.showXMLErrors", false);
pref("extensions.firebug.showChromeErrors", false);
pref("extensions.firebug.showChromeMessages", false);
pref("extensions.firebug.showExternalErrors", false);
pref("extensions.firebug.showNetworkErrors", false);
pref("extensions.firebug.showXMLHttpRequests", true);
pref("extensions.firebug.showStackTrace", false);
pref("extensions.firebug.console.logLimit", 500);
pref("extensions.firebug.console.enableSites", false);
pref("extensions.firebug.tabularLogMaxHeight", 200);
pref("extensions.firebug.consoleFilterTypes", "all");

// HTML
pref("extensions.firebug.showCommentNodes", false);
pref("extensions.firebug.showTextNodesWithWhitespace", false);
pref("extensions.firebug.showTextNodesWithEntities", true);
pref("extensions.firebug.showFullTextNodes", true);
pref("extensions.firebug.highlightMutations", true);
pref("extensions.firebug.expandMutations", false);
pref("extensions.firebug.scrollToMutations", false);
pref("extensions.firebug.shadeBoxModel", true);
pref("extensions.firebug.showQuickInfoBox", false);
pref("extensions.firebug.displayedAttributeValueLimit", 1024);

// CSS
pref("extensions.firebug.onlyShowAppliedStyles", false);
pref("extensions.firebug.showUserAgentCSS", false);
pref("extensions.firebug.expandShorthandProps", false);
pref("extensions.firebug.showMozillaSpecificStyles", false);
pref("extensions.firebug.computedStylesDisplay", "grouped");
pref("extensions.firebug.cssEditMode", "Source");

// Script
pref("extensions.firebug.breakOnErrors", false);
pref("extensions.firebug.showAllSourceFiles", false);
pref("extensions.firebug.trackThrowCatch", false);
pref("extensions.firebug.script.enableSites", false);
pref("extensions.firebug.scriptsFilter", "all");
pref("extensions.firebug.replaceTabs", 4);
pref("extensions.firebug.filterSystemURLs", true);

// Stack
pref("extensions.firebug.omitObjectPathStack", false);

// DOM
pref("extensions.firebug.showUserProps", true);
pref("extensions.firebug.showUserFuncs", true);
pref("extensions.firebug.showDOMProps", true);
pref("extensions.firebug.showDOMFuncs", false);
pref("extensions.firebug.showDOMConstants", false);
pref("extensions.firebug.ObjectShortIteratorMax", 3);
pref("extensions.firebug.showEnumerableProperties", true);
pref("extensions.firebug.showOwnProperties", false);

// Layout
pref("extensions.firebug.showRulers", true);

// Net
pref("extensions.firebug.netFilterCategory", "all");
pref("extensions.firebug.net.logLimit", 500);
pref("extensions.firebug.net.enableSites", false);
pref("extensions.firebug.netDisplayedResponseLimit", 102400);
pref("extensions.firebug.netDisplayedPostBodyLimit", 10240);
pref("extensions.firebug.net.hiddenColumns", "");
pref("extensions.firebug.netPhaseInterval", 1000);
pref("extensions.firebug.sizePrecision", 1);
pref("extensions.firebug.netParamNameLimit", 25);
pref("extensions.firebug.netShowPaintEvents", false);
pref("extensions.firebug.netShowBFCacheResponses", true);
pref("extensions.firebug.netHtmlPreviewHeight", 100);

// JSON Preview
pref("extensions.firebug.sortJsonPreview", false);

// Cache
pref("extensions.firebug.cache.mimeTypes", "");
pref("extensions.firebug.cache.responseLimit", 5242880);

// External Editors
pref("extensions.firebug.externalEditors", "");

// Keyboard
pref("extensions.firebug.key.shortcut.reenterCommand", "control shift e");
pref("extensions.firebug.key.shortcut.toggleInspecting", "accel shift c");
pref("extensions.firebug.key.shortcut.toggleQuickInfoBox", "accel shift i");
pref("extensions.firebug.key.shortcut.toggleProfiling", "accel shift p");
pref("extensions.firebug.key.shortcut.focusCommandLine", "accel shift l");
pref("extensions.firebug.key.shortcut.focusFirebugSearch", "accel shift k");
pref("extensions.firebug.key.shortcut.focusWatchEditor", "accel shift n");
pref("extensions.firebug.key.shortcut.focusLocation", "control shift VK_SPACE");
pref("extensions.firebug.key.shortcut.nextObject", "control .");
pref("extensions.firebug.key.shortcut.previousObject", "control ,");
pref("extensions.firebug.key.shortcut.toggleFirebug", "VK_F12");
pref("extensions.firebug.key.shortcut.detachFirebug", "accel VK_F12");
pref("extensions.firebug.key.shortcut.leftFirebugTab", "accel shift VK_PAGE_UP");
pref("extensions.firebug.key.shortcut.rightFirebugTab", "accel shift VK_PAGE_DOWN");
pref("extensions.firebug.key.shortcut.previousFirebugTab", "control `");
pref("extensions.firebug.key.shortcut.clearConsole", "accel shift r");
pref("extensions.firebug.key.shortcut.navBack", "accel shift VK_LEFT");
pref("extensions.firebug.key.shortcut.navForward", "accel shift VK_RIGHT");
pref("extensions.firebug.key.shortcut.increaseTextSize", "alt accel +");
pref("extensions.firebug.key.shortcut.decreaseTextSize", "alt accel -");
pref("extensions.firebug.key.shortcut.normalTextSize", "alt accel 0");

// Accessibility
pref("extensions.firebug.a11y.enable", false);

// Debugging
pref("extensions.firebug.clearDomplate", false);