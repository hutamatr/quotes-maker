import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

export const exportToPNG = (dom, id) => {
  const scale = 3;

  const style = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${dom.offsetWidth}px`,
    height: `${dom.offsetHeight}px`,
  };

  const param = {
    height: dom.offsetHeight * scale,
    width: dom.offsetWidth * scale,
    quality: 1,
    style,
  };
  DomToImage.toBlob(dom, param)
    .then((blob) => saveAs(blob, `quotes${id}.png`))
    .catch((error) => {
      console.error(error.message);
    });
};
