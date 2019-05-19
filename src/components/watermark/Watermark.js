import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import WaterMarkSvg from './WaterMarkSvg';

export default class WaterMark extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    className: '',
    text: '水印',
    width: 200,
    height: 200
  }

  wrapper = React.createRef();

  renderWatermark() {
    const {
      width,
      height,
      src
    } = this.props;
    let markImg = new Image();
    let res = new Image();
    res.width = width;
    res.height = height;
    res.src = src;
    markImg.crossOrigin = 'Anonymous';
    markImg.onload = () => {
      let img = new Image();

      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(markImg, 0, 0, width, height);
        ctx.drawImage(img, 0, 0);

        try {
          res.src = canvas.toDataURL('image/png');
        } catch (e) {
          console.error(e);
        }
      };

      img.src = WaterMarkSvg(this.props);
      this.wrapper.current && this.wrapper.current.append(res);
    };
    markImg.src = res.src;
  }

  render() {
    const {
      className
    } = this.props;

    const classes = cn('zhui-watermark', className);

    return (
      <div className={classes} ref={this.wrapper}>
        {this.renderWatermark()}
      </div>
    );
  }
}
