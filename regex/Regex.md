# Regex (Regular Expression)

##### `string.replace(/aranan değer/flags(zorunlu değil))`

## Modifiers (Değiştiriciler)

> #### flag i = büyük küçük harf duyarlılığını kaldırır

> #### flag g = gloabal eşleşme sağlar (ilk eşleşmede durmak yerine bütün eşleşmeleri bulmadan durmaz)

> #### flag m = çok satırlı eşleşme sağlar

##Patterns (şekiller)

**köşeli parantezler** bir dizi karakter bulmak için kullanılır

> #### [abc] = parantezler arasındaki değerleri bulur 

> #### [0-9] = parantezler arasındaki sayıları bulur

> #### (x|y) = '|' karakteri ile ayrılmış alternatiflerden herhangi birini bulur

## Metacharacters 

**Meta karakterler** özel bir karaktere sahip karakterlerdir.

> #### \d = rakam bulur

> #### \s = Boşluk karakterini bulur

> #### \b = aranan değerin başına koyarsan en sondakini sonuna koyarsan en baştakini bulur

## Quantifiers (Niceleyiciler)

**Niceleyiciler** miktarları tanımlar:

> #### n+ = n yerine girilen değerde en az bir tane içerenle eşleşir

> #### n* = n yerine yazılan değerde 0 ve ya daha fazla içerenle eşleşir