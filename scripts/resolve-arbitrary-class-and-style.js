/**
 * 在 tailwindcss 官网文档页面打开 console 运行，可以扫描出所有支持(任意值)的工具类名和样式。
 */

const nav = document.querySelector("nav.flex.flex-col.gap-8");

const arr = Array.from(nav.querySelectorAll("div.flex")).slice(3);

const hrefs = arr
  .map((i) => {
    return Array.from(i.querySelectorAll("[data-headlessui-state]")).map((i) =>
      i.getAttribute("href"),
    );
  })
  .flat();

const arr2 = [];

for (const href of hrefs) {
  const res = await fetch(href);
  const text = await res.text();
  const dom = new DOMParser().parseFromString(text, "text/html");
  const table = dom.querySelector(`#quick-reference" table`);
  table.querySelectorAll("tbody tr").forEach((i) => {
    const [cls, desc] = Array.from(i.querySelectorAll("td"));
    if (/\-\[.*\]/.test(cls.innerText)) {
      arr2.push({
        label: cls.innerText,
        desc: desc.innerText,
      });
    }
  });
}

console.log(arr2);
