export default function WaterMarkSvg({ height, width, text }) {
  return 'data:image/svg+xml;base64,' + window.btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div style="
            position: absolute;
            top: 5px;
            left: 5px;
            width: 40px;
            height: auto;
            border-radius: 2px;
            padding: 2px;
            border: 1px solid #b9291f;
          ">
            <div style="
              font-family: 'STKaiti';
              font-size: 14px;
              width: 100%;
              height: 100%;
              background: #b9291f;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              letter-spacing: 2px;
              padding: 4px 0;
            ">
              ${unescape(encodeURIComponent(text))}
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>`
  );
}