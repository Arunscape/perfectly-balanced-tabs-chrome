document.getElementById("terminate").addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    if (tabs.length < 2) {
      chrome.tabs.remove(tabs[0].id);
      return;
    }
    //console.log(tabs);
    const halfCount = Math.floor(tabs.length / 2);
    const randomIndices = new Set();
    while (randomIndices.size < halfCount) {
      randomIndices.add(Math.floor(Math.random() * tabs.length));
    }
    const tabsToClose = [...randomIndices].map((index) => tabs[index]);

    tabsToClose.forEach((tab) => chrome.tabs.remove(tab.id));
  });
});
