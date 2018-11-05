//イベント
//$('セレクタ').メソッド（引数）;
//セレクタ→id,class,タグ

//css
//あんまり使わない
//$('セレクタ').css('プロパティ名',値);

//this →　イベント発生元

//DOMContentLoaded
//text()= テキスト内容を取得 / text('hoge') = テキストにhogeをセット
//val()←formに入力された内容を取得
//属性をセットするときはattr()
$(function() {
  console.log($('#btn').parent().html());
  console.log($('#btn').html());
  console.log($('#btn').text('テキスト'));

	$('#btn').on('click',function(){
		console.log('ボタンがクリックされました');
    

    // let btn = $('<button>');
    // btn.text('後ろに追加');
    
    //メソッドチェーン
    let btn = $('<button>').text('後ろに追加');

    $(this).before('<button>前に追加</button>');
    $(this).after(btn);
    $(this).prepend('子要素　前');
    $(this).append('子要素　後ろ');

    // $(this).addClass('add');
    // $(this).removeClass('add');
    $(this).toggleClass('add');

    $(this).css('color','blue');

    $('.hoge').fadeOut(3000);
   
	})


	$('#btn3').on('click',function(){
		$('.hoge').fadeIn(1000);
	})

  $('#btn').on('mouseover',function(){
  	console.log('マウスオーバーされました');
  })

  $('#btn').on('mouseleave',function(){
  	console.log('マウスが離れました');
  })



	$('#btn2').on('click',addLink);


  function addLink(){
  	let url = $('#url').val();
	  let siteName = $('#site').val();
	  let a = $('<a>').attr('href',url).text(siteName);
	  $('form').after(a);

  }

});


