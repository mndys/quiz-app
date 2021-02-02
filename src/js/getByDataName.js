export default function getByDataName(dataName, target = document) {
  return target.querySelector(`[data-name="${dataName}"]`)
}
