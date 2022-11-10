const libraries = ["lib/framework.js", "lib/interceptor.js"];
const modules = [
  "modules/blue-badge.js",
  "modules/remove-blue-from-verified-tab.js",
];

function injectScript(scriptName) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    (document.head || document.documentElement).appendChild(script);
    script.onload = resolve;
  });
}

async function injectScripts(array) {
  for (const item of array) {
    await injectScript(item);
  }
}

async function inject() {
  await injectScripts(libraries);
  await injectScripts(modules);
}

inject();
