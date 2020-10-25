#  react.js お勉強会 @2020/10/25

## 本日残ってしまった宿題
- リストをオブジェクト内の日付順でソートしたい
    - 参考
        - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    
- 作ってみた
    - サンプルコード
        - コマンドラインで以下を実行
        ~~~
        ndoe sample.js
        ~~~

    - サンプルアプリ
        - コマンドラインで以下を実行
        ~~~
        cd my-app
        npm start
        //もしかするとmacだと起動しないかも...
        ~~~

        - 起動したら
            1. GET LISTボタンでリストを表示
            1. 昇順/降順ボタンでリストを並べ替え
            1. 表示を確認してね


    - 以下をうまく書き換えて自分のコードに当てはめてみてね
        - 該当箇所
        ~~~javascript
        //ここはテストデータ
        let samplelist = [
            {date : '2020/10/21',valueASC : '昇順で二番目に来るはず', valueDSC : '降順で二番目に来るはず'},
            {date : '2020/10/22',valueASC : '昇順で三番目に来るはず', valueDSC : '降順で一番目に来るはず'},
            {date : '2020/10/20',valueASC : '昇順で一番目に来るはず', valueDSC : '降順で三番目に来るはず'},
        ];
        //ここのsamplelistが、stateで管理しているリストになる
        let items = samplelist.sort((a,b) => {
            //テストデータでいうと、「date」で並べ替える
            //実際はdetepickerから取得してリストに詰めたkey
            var dateA = a.date;
            var dateB = b.date;
            if (dateA < dateB) return 1;
            if (dateA > dateB) return -1;
            // names must be equal
            return 0;
        });
        ~~~