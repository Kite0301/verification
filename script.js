$(function() {

  function getInt(str) {
    return Number(str);
  }

  function deletePx(str) {
    return str.replace('px','');
  }

  function addPx(num) {
    return num.toString() + 'px';
  }

  function addTopAndBottom(array) {
    return array[0] + array[2];
  }

  function addRightAndLeft(array) {
    return array[1] + array[3];
  }

  // margin, padding用
  function getSize(str) {
    var array = str.split('px');
    array.pop();
    array = array.map(function(element) {
      return Number(element);
    });

    switch (array.length) {
      case 1:
        return [array[0], array[0], array[0], array[0]]
        break;
      case 2:
        return [array[0], array[1], array[0], array[1]]
        break;
      case 3:
        return [array[0], array[1], array[2], array[1]]
        break;
      case 4:
        return array;
        break;
      default:
        return [];
        break;
    }
  }

  // border用
  function getBorderSize(array) {
    return array.map(function(element) {
      return Number(element.split('px')[0]);
    });
  }

  // 対象物
  var $object = $('.box');

  var $marginTop = $('.marginTop');
  var $marginRight = $('.marginRight');
  var $marginBottom = $('.marginBottom');
  var $marginLeft = $('.marginLeft');

  var $borderTop = $('.borderTop');
  var $borderRight = $('.borderRight');
  var $borderBottom = $('.borderBottom');
  var $borderLeft = $('.borderLeft');

  var $paddingTop = $('.paddingTop');
  var $paddingRight = $('.paddingRight');
  var $paddingBottom = $('.paddingBottom');
  var $paddingLeft = $('.paddingLeft');

  var $widthHeight = $('.widthHeight')

  $object.hover(
    function(){
      var $obj = $(this)
      // CSSを取得
      const margin = $obj.css('margin')
      const border_top = $obj.css('border-top')
      const border_right = $obj.css('border-right')
      const border_bottom = $obj.css('border-bottom')
      const border_left = $obj.css('border-left')
      const padding = $obj.css('padding')
      const width = $obj.css('width')
      const height = $obj.css('height')
      // 各値を数値に変更
      const marginSize = getSize(margin);
      const borderSize = getBorderSize([border_top, border_right, border_bottom, border_left]);
      const paddingSize = getSize(padding);
      const widthLength = getInt(deletePx(width));
      const heightLength = getInt(deletePx(height));
      const positionTop = $obj.offset().top;
      const positionLeft = $obj.offset().left;

      // -------------------- margin --------------------
      $marginTop.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize) + addRightAndLeft(marginSize)),
        height: addPx(marginSize[0]),
        top: addPx(positionTop - marginSize[0]),
        left: addPx(positionLeft - marginSize[3]),
      });

      $marginRight.css({
        width: addPx(marginSize[1]),
        height: addPx(heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
        top: addPx(positionTop),
        left: addPx(positionLeft + widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
      });

      $marginBottom.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize) + addRightAndLeft(marginSize)),
        height: addPx(marginSize[2]),
        top: addPx(positionTop + heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
        left: addPx(positionLeft - marginSize[3]),
      });

      $marginLeft.css({
        width: addPx(marginSize[3]),
        height: addPx(heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
        top: addPx(positionTop),
        left: addPx(positionLeft - marginSize[3]),
      });

      $marginTop.show();
      $marginRight.show();
      $marginLeft.show();
      $marginBottom.show();

      // -------------------- border --------------------
      $borderTop.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
        height: addPx(borderSize[0]),
        top: addPx(positionTop),
        left: addPx(positionLeft),
      });

      $borderRight.css({
        width: addPx(borderSize[1]),
        height: addPx(heightLength + addTopAndBottom(paddingSize)),
        top: addPx(positionTop + borderSize[0]),
        left: addPx(positionLeft + widthLength + addRightAndLeft(paddingSize) + borderSize[3]),
      });

      $borderBottom.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
        height: addPx(borderSize[2]),
        top: addPx(positionTop + heightLength + addTopAndBottom(paddingSize) + borderSize[0]),
        left: addPx(positionLeft),
      });

      $borderLeft.css({
        width: addPx(borderSize[3]),
        height: addPx(heightLength + addTopAndBottom(paddingSize)),
        top: addPx(positionTop + borderSize[0]),
        left: addPx(positionLeft),
      });

      $borderTop.show();
      $borderRight.show();
      $borderLeft.show();
      $borderBottom.show();

      // -------------------- padding --------------------
      $paddingTop.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize)),
        height:addPx(paddingSize[0]),
        top: addPx(positionTop + borderSize[0]),
        left: addPx(positionLeft + borderSize[3]),
      });

      $paddingRight.css({
        width: addPx(paddingSize[1]),
        height: addPx(heightLength),
        top: addPx(positionTop + borderSize[0] + paddingSize[0]),
        left: addPx(positionLeft + borderSize[3] + paddingSize[3] + widthLength),
      });

      $paddingBottom.css({
        width: addPx(widthLength + addRightAndLeft(paddingSize)),
        height:addPx(paddingSize[2]),
        top: addPx(positionTop + borderSize[0] + paddingSize[0] + heightLength),
        left: addPx(positionLeft + borderSize[3]),
      });

      $paddingLeft.css({
        width: addPx(paddingSize[3]),
        height: addPx(heightLength),
        top: addPx(positionTop + borderSize[0] + paddingSize[0]),
        left: addPx(positionLeft + borderSize[3]),
      });

      $paddingTop.show();
      $paddingRight.show();
      $paddingLeft.show();
      $paddingBottom.show();

      // -------------------- width & height --------------------
      $widthHeight.css({
        width: addPx(widthLength),
        height: addPx(heightLength),
        top: addPx(positionTop + borderSize[0] + paddingSize[0]),
        left: addPx(positionLeft + borderSize[3] + paddingSize[3]),
      });

      $widthHeight.show();

    },
    function(){
      $marginTop.hide();
      $marginRight.hide();
      $marginLeft.hide();
      $marginBottom.hide();

      $borderTop.hide();
      $borderRight.hide();
      $borderLeft.hide();
      $borderBottom.hide();

      $paddingTop.hide();
      $paddingRight.hide();
      $paddingLeft.hide();
      $paddingBottom.hide();

      $widthHeight.hide();
    }
  );
});
