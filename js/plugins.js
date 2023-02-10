//由Translator++生成。
// 不要直接编辑此文件。
var $plugins =
[
  {
    "name": "Community_Basic",
    "status": true,
    "description": "基本的なパラメーターを設定するプラグインです。",
    "parameters": {
      "cacheLimit": "20",
      "screenWidth": "816",
      "screenHeight": "624",
      "changeWindowWidthTo": "",
      "changeWindowHeightTo": "",
      "renderingMode": "auto",
      "alwaysDash": "off"
    }
  },
  {
    "name": "aligncenter",
    "status": true,
    "description": "メッセージボックスの文字を中央揃い、右揃いにするプラグインです。",
    "parameters": {}
  },
  {
    "name": "TRP_SkitConfig",
    "status": true,
    "description": "TRP_Skitの設定用プラグイン。TRP_Skitより上に配置。",
    "parameters": {
      "categoryBasic": "==============================",
      "SkitActorSettings": "[\"{\\\"name\\\":\\\"pic\\\",\\\"inputName\\\":\\\"pic\\\",\\\"fileName\\\":\\\"pic\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"寿 永远子\\\",\\\"inputName\\\":\\\"寿\\\",\\\"fileName\\\":\\\"towako\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"黒井先生\\\",\\\"inputName\\\":\\\"黑井\\\",\\\"fileName\\\":\\\"kuroi\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"成见先生\\\",\\\"inputName\\\":\\\"成见\\\",\\\"fileName\\\":\\\"narumi\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"猫猫\\\",\\\"inputName\\\":\\\"猫猫\\\",\\\"fileName\\\":\\\"tarai\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"葛城 一花\\\",\\\"inputName\\\":\\\"葛城\\\",\\\"fileName\\\":\\\"ichika\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"菅原 铃\\\",\\\"inputName\\\":\\\"菅原\\\",\\\"fileName\\\":\\\"rin\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"大宮 京雅\\\",\\\"inputName\\\":\\\"大宮\\\",\\\"fileName\\\":\\\"kyoga\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"▲▲▲▲▲\\\",\\\"inputName\\\":\\\"▲\\\",\\\"fileName\\\":\\\"kururu\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"staff\\\",\\\"inputName\\\":\\\"staff\\\",\\\"fileName\\\":\\\"staff\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"error\\\",\\\"inputName\\\":\\\"error\\\",\\\"fileName\\\":\\\"error\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\"]",
      "firstPictureId": "1",
      "lastPictureId": "25",
      "useDefaultExpression": "false",
      "categoryDisplayPosition": "────────────────",
      "zOrder": "1",
      "verticalPositionType": "1",
      "baseOffsetY": "0",
      "xPosition": "[\"{\\\"name\\\":\\\"中央\\\",\\\"position\\\":\\\"5.0\\\"}\",\"{\\\"name\\\":\\\"center\\\",\\\"position\\\":\\\"5.0\\\"}\",\"{\\\"name\\\":\\\"左\\\",\\\"position\\\":\\\"2.0\\\"}\",\"{\\\"name\\\":\\\"left\\\",\\\"position\\\":\\\"2.0\\\"}\",\"{\\\"name\\\":\\\"右\\\",\\\"position\\\":\\\"8.0\\\"}\",\"{\\\"name\\\":\\\"right\\\",\\\"position\\\":\\\"8.0\\\"}\"]",
      "noReverse": "true",
      "noAnimationMirror": "",
      "useRightDirection": "false",
      "bustsScale": "100",
      "border": "================================",
      "macro": "[\"{\\\"name\\\":\\\"pop1\\\",\\\"macro\\\":\\\"jump shizu t 30 d 180\\\"}\",\"{\\\"name\\\":\\\"pop2\\\",\\\"macro\\\":\\\"jump shizu t 80\\\"}\",\"{\\\"name\\\":\\\"pop\\\",\\\"macro\\\":\\\"sequence shizu t d pop1 pop2\\\"}\",\"{\\\"name\\\":\\\"double1\\\",\\\"macro\\\":\\\"jump shizu t 30 1.7\\\"}\",\"{\\\"name\\\":\\\"double\\\",\\\"macro\\\":\\\"sequence shizu t d double1 double1\\\"}\",\"{\\\"name\\\":\\\"nod\\\",\\\"macro\\\":\\\"jump shizu t 25 0.9 180\\\"}\",\"{\\\"name\\\":\\\"stamp1\\\",\\\"macro\\\":\\\"jump shizu t 5 0.3\\\"}\",\"{\\\"name\\\":\\\"stamp\\\",\\\"macro\\\":\\\"sequence shizu t t stamp1 stamp1 stamp1 stamp1 stamp1 stamp1\\\"}\",\"{\\\"name\\\":\\\"slide\\\",\\\"macro\\\":\\\"slidef shizu t\\\"}\",\"{\\\"name\\\":\\\"slidef\\\",\\\"macro\\\":\\\"shake shizu t 10 1 15 t\\\"}\",\"{\\\"name\\\":\\\"slideb\\\",\\\"macro\\\":\\\"shake shizu t 10 1 15\\\"}\",\"{\\\"name\\\":\\\"tremble\\\",\\\"macro\\\":\\\"shake shizu t 4 10 6\\\"}\",\"{\\\"name\\\":\\\"rock\\\",\\\"macro\\\":\\\"shake shizu t 5 5 25 t\\\"}\",\"{\\\"name\\\":\\\"push\\\",\\\"macro\\\":\\\"shake shizu t 17 1 16 t\\\"}\",\"{\\\"name\\\":\\\"attack\\\",\\\"macro\\\":\\\"shake shizu t 17 1 15\\\"}\"]",
      "macro2": "[]",
      "macro3": "[]",
      "macro4": "[]",
      "macro5": "[\"{\\\"name\\\":\\\"loopstamp1\\\",\\\"macro\\\":\\\"jump shizu t 5 0.3\\\"}\",\"{\\\"name\\\":\\\"loopstamp\\\",\\\"macro\\\":\\\"loop shizu t d stamp1\\\"}\",\"{\\\"name\\\":\\\"looptremble1\\\",\\\"macro\\\":\\\"shake shizu t 4 10 2\\\"}\",\"{\\\"name\\\":\\\"looptremble\\\",\\\"macro\\\":\\\"loop shizu t d looptremble1\\\"}\",\"{\\\"name\\\":\\\"looprock1\\\",\\\"macro\\\":\\\"shake shizu t 5 4 25 t\\\"}\",\"{\\\"name\\\":\\\"looprock\\\",\\\"macro\\\":\\\"loop shizu t d looprock1\\\"}\",\"{\\\"name\\\":\\\"loopfloat1\\\",\\\"macro\\\":\\\"y shizu t 10 45\\\"}\",\"{\\\"name\\\":\\\"loopfloat2\\\",\\\"macro\\\":\\\"y shizu t -10 45\\\"}\",\"{\\\"name\\\":\\\"loopfloat\\\",\\\"macro\\\":\\\"loop shizu t d loopfloat1 loopfloat2\\\"}\"]",
      "mobNames": "[]",
      "controlCharacters": "{\"expression\":\"SE\",\"pose\":\"SP\",\"animation\":\"SA\",\"motion\":\"SM\"}",
      "categoryAppearCommands": "────────────────",
      "defaultPositionX": "left",
      "pushInMargin": "2",
      "pushInSpeed": "5",
      "fadeIn": "{\"duration\":\"12\",\"wait\":\"true\",\"easeType\":\"6\",\"pushIn\":\"true\"}",
      "slideIn": "{\"speed\":\"17\",\"slideLength\":\"2\",\"wait\":\"false\",\"easeType\":\"3\",\"pushIn\":\"true\"}",
      "moveIn": "{\"speed\":\"14\",\"wait\":\"true\",\"easeType\":\"3\",\"pushIn\":\"true\"}",
      "categoryDisappearCommands": "────────────────",
      "defaultDisappear": "1",
      "fadeOut": "{\"duration\":\"12\",\"wait\":\"true\",\"easeType\":\"3\"}",
      "slideOut": "{\"speed\":\"9\",\"slideLength\":\"1\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "moveOut": "{\"speed\":\"14\",\"wait\":\"true\",\"easeType\":\"3\"}",
      "categoryExpCommands": "────────────────",
      "expression": "{\"duration\":\"4\",\"wait\":\"false\"}",
      "pose": "{\"style\":\"0\",\"duration\":\"0\",\"wait\":\"false\",\"easeType\":\"0\"}",
      "categoryMoveCommands": "────────────────",
      "speed": "[\"{\\\"name\\\":\\\"verySlow\\\",\\\"speed\\\":\\\"3.0\\\"}\",\"{\\\"name\\\":\\\"slow\\\",\\\"speed\\\":\\\"6.0\\\"}\",\"{\\\"name\\\":\\\"littleSlow\\\",\\\"speed\\\":\\\"9.0\\\"}\",\"{\\\"name\\\":\\\"normal\\\",\\\"speed\\\":\\\"12.0\\\"}\",\"{\\\"name\\\":\\\"littleFast\\\",\\\"speed\\\":\\\"15.0\\\"}\",\"{\\\"name\\\":\\\"fast\\\",\\\"speed\\\":\\\"20.0\\\"}\",\"{\\\"name\\\":\\\"veryFast\\\",\\\"speed\\\":\\\"30.0\\\"}\"]",
      "move": "{\"speed\":\"12\",\"wait\":\"false\",\"easeType\":\"0\"}",
      "yMove": "{\"duration\":\"20\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "jump": "{\"height\":\"80\",\"gravity\":\"1.5\",\"wait\":\"false\"}",
      "step": "{\"height\":\"20\",\"gravity\":\"0.5\",\"speed\":\"1.5\",\"wait\":\"false\",\"relative\":\"0\",\"easeType\":\"3\"}",
      "flip": "{\"num\":\"1\",\"durationPerCount\":\"14\",\"wait\":\"true\",\"easeType\":\"0\"}",
      "shake": "{\"strength\":\"8\",\"count\":\"2\",\"durationPerCount\":\"6\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "angle": "{\"angle\":\"360\",\"duration\":\"60\",\"relative\":\"1\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "scale": "{\"scaleX\":\"100\",\"scaleY\":\"100\",\"duration\":\"20\",\"relative\":\"0\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "categoryEffectCommands": "────────────────",
      "animation": "{\"list\":\"[]\",\"focus\":\"true\",\"mirror\":\"false\",\"wait\":\"false\"}",
      "opacity": "{\"duration\":\"20\",\"opacity\":\"0\",\"relative\":\"0\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "focus": "{\"duration\":\"10\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "unFocus": "{\"duration\":\"1\",\"tone\":\"0 0 0 0\",\"scale\":\"100.0\",\"wait\":\"false\",\"easeType\":\"3\"}",
      "emphasize": "{\"duration\":\"20\",\"tone\":\"0 0 0 0\",\"scaleX\":\"120\",\"scaleY\":\"120\",\"num\":\"1\",\"interval\":\"20\",\"wait\":\"true\",\"easeType\":\"3\"}",
      "tint": "{\"duration\":\"20\",\"tone\":\"0 0 0 0\",\"wait\":\"false\"}"
    }
  },
  {
    "name": "TRP_Skit",
    "status": true,
    "description": "立ち絵操作プラグイン。",
    "parameters": {}
  },
  {
    "name": "TRP_SkitExAutoShow",
    "status": true,
    "description": "TRP_Skitに立ち絵の自動表示/非表示機能を追加",
    "parameters": {
      "showCommand": "slideIn",
      "hideCommand": "slideOut",
      "positions": "[\"left\"]"
    }
  },
  {
    "name": "Exhydra_OptionsMenu_ExtraOptions",
    "status": true,
    "description": "[1.05] Additional options for the options menu.",
    "parameters": {
      "─ Title Screen": "───────────────",
      "Remove from Title Screen": "false",
      "─ Game Menu": "───────────────",
      "Remove from Game Menu": "false",
      "─ Options Menu": "───────────────",
      "Remove Always Dash": "false",
      "Remove Command Remember": "true",
      "Remove BGM Volume": "false",
      "Remove BGS Volume": "true",
      "Remove ME Volume": "true",
      "Remove SE Volume": "false",
      "─ Custom Options": "───────────────",
      "Option 1 Label": "",
      "Option 1 Type": "",
      "Option 1 ID": "",
      "Option 1 Default": "",
      "Option 1 MinMax": "",
      "Option 1 Hide": "",
      "Option 2 Label": "",
      "Option 2 Type": "",
      "Option 2 ID": "",
      "Option 2 Default": "",
      "Option 2 MinMax": "",
      "Option 2 Hide": "",
      "Option 3 Label": "",
      "Option 3 Type": "",
      "Option 3 ID": "",
      "Option 3 Default": "",
      "Option 3 MinMax": "",
      "Option 3 Hide": "",
      "Option 4 Label": "",
      "Option 4 Type": "",
      "Option 4 ID": "",
      "Option 4 Default": "",
      "Option 4 Hide": "",
      "Option 4 MinMax": "",
      "Option 5 Label": "",
      "Option 5 Type": "",
      "Option 5 ID": "",
      "Option 5 Default": "",
      "Option 5 MinMax": "",
      "Option 5 Hide": "",
      "─ Plugin": "───────────────",
      "Plugin GID": "eXa-JEuInwXq4chcgu9"
    }
  },
  {
    "name": "FTKR_ItemCategoryFixed",
    "status": true,
    "description": "v1.0.3 アイテムボックスのカテゴリ選択を無くす",
    "parameters": {
      "Item Category": "item"
    }
  },
  {
    "name": "AudioStreaming",
    "status": true,
    "description": "音声読み込みを高速化し、oggファイルのみを使用します。",
    "parameters": {
      "mode": "10",
      "deleteM4a": "false"
    }
  },
  {
    "name": "ParallaxLayerMap",
    "status": true,
    "description": "多層レイヤー一枚絵マッププラグイン",
    "parameters": {}
  },
  {
    "name": "TMRegionPassable",
    "status": true,
    "description": "その場所が通行可能かどうかをリージョンで設定できるようになります。",
    "parameters": {
      "passableRegions": "251",
      "dontPassRegions": "252 253",
      "counterRegions": "253"
    }
  },
  {
    "name": "QPlus",
    "status": true,
    "description": "<QPlus> (Should go above all Q Plugins)\nSome small changes to MV for easier plugin development.",
    "parameters": {
      "Quick Test": "false",
      "Default Enabled Switches": "[]",
      "Ignore Mouse when inactive": "false"
    }
  },
  {
    "name": "QCamera",
    "status": true,
    "description": "<QCamera>\nBetter Camera control",
    "parameters": {
      "Offset": "0.10",
      "Shift Y": "0",
      "Shift X": "0"
    }
  },
  {
    "name": "TMOmitShopCommand",
    "status": true,
    "description": "購入または売却のみの場合にショップコマンドを省略します。",
    "parameters": {}
  },
  {
    "name": "BB_WindowSelector3",
    "status": true,
    "description": "ウインドウスキンと切り替えるプラグイン。",
    "parameters": {
      "Variable ID": "4",
      "Window1 Opacity": "192",
      "Window2 Opacity": "255",
      "Window3 Opacity": "192",
      "Window1 OutlineColor": "rgba(0, 0, 0, 0.5)",
      "Window1 OutlineWidth": "4",
      "Window2 OutlineColor": "rgba(0, 0, 0, 0)",
      "Window2 OutlineWidth": "4",
      "Window3 OutlineColor": "rgba(0, 0, 0, 0.5)",
      "Window3 OutlineWidth": "4",
      "Window1 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window1 DimGradationColor": "rgba(0, 0, 0, 0)",
      "Window2 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window2 DimGradationColor": "rgba(0, 0, 0, 0)",
      "Window3 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window3 DimGradationColor": "rgba(0, 0, 0, 0)"
    }
  },
  {
    "name": "MPP_ChoiceEX",
    "status": true,
    "description": "【ver.3.11】選択肢の機能拡張",
    "parameters": {
      "maxPageRow": "10",
      "Disabled Index": "none",
      "=== Command ===": "",
      "Plugin Commands": "{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\",\"ChoiceUnderMessage\":\"ChoiceUnderMessage\"}",
      "Event Comment": "{\"ChoiceHelp\":\"帮助选项\"}"
    }
  },
  {
    "name": "FilterController",
    "status": true,
    "description": "FilterController",
    "parameters": {
      "変数に小数点が使えるようにする": "true",
      "displacementImage": "DisplacementMap",
      "enabledAll-Settings": "",
      "enabledAll-ShowInOptionMenu": "true",
      "enabledAll-Text": "画面特殊效果",
      "enabledAll-DefaultValue": "true"
    }
  },
  {
    "name": "FilterController2",
    "status": true,
    "description": "",
    "parameters": {}
  },
  {
    "name": "GALV_EventStartTypes",
    "status": true,
    "description": "Allows different event commands to be run depending how the event was activated",
    "parameters": {}
  },
  {
    "name": "StatusBustImage",
    "status": true,
    "description": "バストアップ表示プラグイン",
    "parameters": {
      "画像X座標": "150",
      "画像Y座標": "150",
      "装備_画像X座標": "",
      "装備_画像Y座標": "",
      "スキル_画像X座標": "",
      "スキル_画像Y座標": "",
      "メイン_画像X座標": "400",
      "メイン_画像Y座標": "300",
      "表示優先度": "1",
      "ベース画像原点": "1",
      "追加画像原点": "2"
    }
  },
  {
    "name": "kz_MenuStatus",
    "status": true,
    "description": "メニューステータスの自由設置",
    "parameters": {
      "Status Rows": "1",
      "Status Cols": "1",
      "Status Window X": "210",
      "Status Window Y": "-1",
      "Status Window Width": "-1",
      "Status Window Height": "-1",
      "Status Window Padding": "0",
      "State X": "0",
      "State Y": "0",
      "State Width": "-1",
      "Actor Icon X": "-1",
      "Actor Icon Y": "-1",
      "Background PNG": "menuback2",
      "Display Text": "[\"'现在的情报点',35,490,190,24,15,0\",\"$gameVariables.value(1),240,490,150,24,15,0\",\"'次のノルマ',35,520,150,24,15,0\",\"$gameVariables.value(3),240,520,150,24,15,0\",\"'零钱',35,550,130,24,15,0\",\"$gameParty.gold(),240,550,150,24,15,0\"]",
      "Display Picture": "[\"a.actor().meta.stand_picture,10,10,30\"]",
      "Display Gauge": "[]"
    }
  },
  {
    "name": "kz_PicMenu",
    "status": true,
    "description": "メニューコマンドの画像化",
    "parameters": {
      "icon width": "120",
      "icon height": "120",
      "item icon": "0",
      "skill icon": "1",
      "equip icon": "2",
      "status icon": "3",
      "formation icon": "4",
      "options icon": "5",
      "save icon": "6",
      "gameEnd icon": "7",
      "icon itemrect": "10",
      "icon rows": "4",
      "icon cols": "1",
      "icon maxexpansion": "0.00",
      "x overhead": "0",
      "y overhead": "0",
      "commandwindow x": "0",
      "commandwindow y": "0",
      "commandwindow width": "400",
      "commandwindow height": "600",
      "display cursor": "true",
      "window background file": "menuback"
    }
  },
  {
    "name": "MOG_TitlePictureCom",
    "status": true,
    "description": "(v1.6 *) Adiciona comandos em imagens no lugar da janela.",
    "parameters": {
      "-> Main <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Animation Mode": "0",
      "Left & Right Input": "true",
      "Com Fade-In Duration": "7",
      "Slide X-Axis": "-100",
      "Slide Y-Axis": "0",
      "": "",
      "-> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Smart Background": "true",
      "Background X-Axis": "0",
      "Background Y-Axis": "0",
      "Background Fade-In Duration": "90",
      "-> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Title Sprite": "true",
      "Title Sprite X-Axis": "550",
      "Title Sprite Y-Axis": "250",
      "Fade-In Duration": "40",
      "Zoom Effect": "false",
      "Zoom Speed": "40",
      "-> Cursor <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Cursor X-Axis": "0",
      "Cursor Y-Axis": "0",
      "Cursor Visible": "true",
      "Cursor Wave Animation": "true",
      "Cursor Rotation Animation": "false",
      "Cursor Rotation Speed": "0.05",
      "-> Commands <<<<<<<<<<<<<<<<<<<<<<<": "",
      "Command Pos 1": "450,380",
      "Command Pos 2": "450,425",
      "Command Pos 3": "443,470",
      "Command Pos 4": "670,550",
      "Command Pos 5": "345,498",
      "Command Pos 6": "345,530",
      "Command Pos 7": "0,192",
      "Command Pos 8": "0,224",
      "Command Pos 9": "0,256",
      "Command Pos 10": "0,288"
    }
  },
  {
    "name": "BB_CustomSaveWindow",
    "status": true,
    "description": "セーブウインドウ改造プラグイン",
    "parameters": {
      "OutsideFrameColor": "0",
      "OutsideFrameOpacity": "0",
      "InsideFrameColor": "0",
      "InsideFrameOpacity": "0",
      "MaxItem": "4",
      "Item0": "7",
      "Item0Length": "300",
      "Item1title": "游玩时间",
      "Item1": "2",
      "Item2title": "情报点",
      "Item2": "6",
      "Item3title": "",
      "Item3": "0",
      "Item4title": "",
      "Item4": "0",
      "Item5": "0",
      "ItemValue1": "1",
      "ItemValue2": "7",
      "ItemValue3": "3",
      "ItemValue4": "4",
      "ItemValue1unit": "P",
      "ItemValue2unit": "",
      "ItemValue3unit": "",
      "ItemValue4unit": "",
      "TitleFramelength1": "110",
      "TitleFramelength2": "110",
      "TitleFramelength3": "110",
      "TitleFramelength4": "110",
      "CharacterPositionY": "6",
      "CharacterOpacity": "2",
      "LevelPositionY": "23",
      "LevelOnOff": "0"
    }
  },
  {
    "name": "MessageSkip",
    "status": true,
    "description": "メッセージスキッププラグイン",
    "parameters": {
      "スキップキー": "shift",
      "オートキー": "A",
      "スキップスイッチ": "0",
      "オートスイッチ": "0",
      "スキップアイコン": "140",
      "オートアイコン": "75",
      "アイコンX": "0",
      "アイコンY": "0",
      "押し続けスキップ": "true",
      "オート待機フレーム": "100 + textSize * 10",
      "終了解除スイッチID": "0",
      "スキップピクチャ": "",
      "ボタン原点": "0",
      "ボタン表示スイッチID": "0",
      "スキップピクチャX": "500",
      "スキップピクチャY": "0",
      "オートピクチャ": "",
      "オートピクチャX": "750",
      "オートピクチャY": "0",
      "無効化スイッチ": "318"
    }
  },
  {
    "name": "Galv_LoadCommonEvent",
    "status": false,
    "description": "(v.1.0) Run a common event when the player loads a save file",
    "parameters": {
      "Load Save File Event": "37"
    }
  },
  {
    "name": "UTA_CommonSave",
    "status": true,
    "description": "共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。",
    "parameters": {
      "Target Switches": "361,363-375,384",
      "Target Variables": "",
      "Is Auto": "true",
      "Auto on Gameover": "false",
      "Show Trace": "false"
    }
  },
  {
    "name": "Vitsuno_PictureGallery",
    "status": true,
    "description": "ピクチャーギャラリー機能を加えるプラグインです。",
    "parameters": {
      "On Menu": "0",
      "Command Name": "ギャラリー",
      "Max Size": "35",
      "Thumbnail Width": "160",
      "Thumbnail Height": "122",
      "None File": "GalleryNone",
      "Use Common Mode": "0"
    }
  }
];