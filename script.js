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
  // 要素の検証用
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
        height: addPx(marginSize[0]),
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize) + addRightAndLeft(marginSize)),
        left: addPx(positionLeft - marginSize[3]),
        top: addPx(positionTop - marginSize[0]),
      });

      $marginRight.css({
        height: addPx(heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
        width: addPx(marginSize[1]),
        left: addPx(positionLeft + widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
        top: addPx(positionTop),
      });

      $marginBottom.css({
        height: addPx(marginSize[2]),
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize) + addRightAndLeft(marginSize)),
        left: addPx(positionLeft - marginSize[3]),
        top: addPx(positionTop + heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
      })

      $marginLeft.css({
        height: addPx(heightLength + addTopAndBottom(paddingSize) + addTopAndBottom(borderSize)),
        width: addPx(marginSize[3]),
        left: addPx(positionLeft - marginSize[3]),
        top: addPx(positionTop),
      })

      $marginTop.show();
      $marginRight.show();
      $marginLeft.show();
      $marginBottom.show();

      // -------------------- border --------------------
      $borderTop.css({
        height: addPx(borderSize[0]),
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
        left: addPx(positionLeft),
        top: addPx(positionTop),
      });

      $borderRight.css({
        height: addPx(heightLength + addTopAndBottom(paddingSize)),
        width: addPx(borderSize[1]),
        left: addPx(positionLeft + widthLength + addRightAndLeft(paddingSize) + borderSize[3]),
        top: addPx(positionTop + borderSize[0]),
      });

      $borderBottom.css({
        height: addPx(borderSize[2]),
        width: addPx(widthLength + addRightAndLeft(paddingSize) + addRightAndLeft(borderSize)),
        left: addPx(positionLeft),
        top: addPx(positionTop + heightLength + addTopAndBottom(paddingSize) + borderSize[0]),
      })

      $borderLeft.css({
        height: addPx(heightLength + addTopAndBottom(paddingSize)),
        width: addPx(borderSize[3]),
        left: addPx(positionLeft),
        top: addPx(positionTop + borderSize[0]),
      })

      $borderTop.show();
      $borderRight.show();
      $borderLeft.show();
      $borderBottom.show();

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
    }
  );
});
