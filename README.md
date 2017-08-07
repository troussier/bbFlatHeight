# bbFlatHeight
高さ揃えする jQuery プラグインです。

## 使い方

### ベーシック
```
$('.elm').bbFlatHeight();
```
全ての指定要素を同じ高さにします。

### 列指定
```
$('.elm').bbFlatHeight({
    col: 3
});
```
「col」で列数を指定してください。

### 複数箇所
```
$('.elm-wrap').each(function() {
    $(this).find('.elm').bbFlatHeight();
});
```
同じページ内で複数箇所に使いたい場合は’each()’などでそれぞれに適用してください。
