export default function ToText(node: any) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}
