import * as React from 'react';
import cn from 'astro-classname';
import WaterMarkSvg from './WaterMarkSvg';

export interface IWaterMarkProps {
  className?: string;
  text?: string;
  src: string;
  width?: number;
  height?: number;
}

export default class WaterMark extends React.Component<IWaterMarkProps> {
  static defaultProps = {
    className: '',
    text: '水印'
  }

  componentDidMount() {
    this.renderWatermark();
  }

  renderWatermark() {
    const {
      width,
      height,
      text,
      src
    } = this.props;
    let markImg = new Image();
    let res = new Image();
    res.src = src;
    markImg.crossOrigin = 'Anonymous';
    markImg.onload = () => {
      let img = new Image();
      let cwidth = width || markImg.width;
      let cheight = height || markImg.height;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = cwidth;
        canvas.height = cheight;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(markImg, 0, 0, cwidth, cheight);
        ctx.drawImage(img, 0, 0);

        try {
          res.src = canvas.toDataURL('image/png');
        } catch (e) {
          console.error(e);
        }
      };

      img.src = WaterMarkSvg({ height, width, text });
      this.wrapper.current && this.wrapper.current.append(res);
    };
    markImg.src = res.src;
  }

  wrapper: any = React.createRef();

  render() {
    const {
      className
    } = this.props;

    const classes = cn('zhui-watermark', className);

    return (
      <div className={classes} ref={this.wrapper}></div>
    );
  }
}
