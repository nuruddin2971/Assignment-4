let currentTab = "alt";
const tabActive = ["bg-navy", "border-navy"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-state-200"];

function switchTab(tab) {
  console.log(tab);
  const tabs = ["all", "interview", "rejected"];

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    }
  }
}
