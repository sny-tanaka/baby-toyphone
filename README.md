# 事前準備

## Nodeのインストール

使用しているバージョンは`.node-version`を参照
`nodenv`を使用していると自動反映されるので便利

### nodenvのインストール

```sh
brew install nodenv
```

## yarnのインストール

```sh
brew install yarn
```

## 推奨設定

VSCodeのFormat on SaveでPrettierを有効にしておくのがオススメ
[参考](https://tukkytech.com/blog/prettier-setting/)

# ローカル起動

```sh
yarn start
```

# 開発ガイドライン

## ディレクトリ構成

コーディング時に関係のあるもののみ記載

```sh
.
├── public
│   ├── favicon.ico # プロジェクトのものに差し替える
│   ├── index.html
│   ├── logo192.png # プロジェクトのものに差し替える
│   ├── logo512.png # プロジェクトのものに差し替える
│   ├── manifest.json # nameを変更する
│   └── robots.txt
├── src
│   ├── App.module.scss # 全体に適用するスタイルを記述する
│   ├── App.tsx # ルーティングを記述する
│   ├── _variables.scss # 全体に適用する変数を記述する(色など)
│   ├── api # APIを呼び出す関数たち
│   │   ├── api.ts # 同階層から呼ばれる汎用メソッド
│   │   └── getUser.ts # サンプルAPI これを参考にして作成する
│   ├── components # コンポーネント群
│   │   ├── common # 汎用コンポーネント
│   │   │   └── CustomNavLink # 汎用コンポーネントのサンプル
│   │   │       ├── CustomNavLink.tsx # コンポーネント本体
│   │   │       ├── CustomNavLink.stories.ts # コンポーネントのStorybook
│   │   │       └── style.module.scss # コンポーネントのスタイル
│   │   └── users # ページ固有のコンポーネント
│   │       └── UserPanel # サンプルコンポーネント
│   │           ├── UserPanel.tsx # コンポーネント本体
│   │           └── style.module.scss # コンポーネントのスタイル
│   ├── constants.ts # プロジェクト全体で共有される定数を記述する
│   ├── index.tsx # プロジェクトのエントリーポイント(基本変更不要)
│   ├── layouts # ページをまたいだ共通部分のレイアウトコンポーネント
│   │   ├── footer
│   │   │   ├── Footer.tsx
│   │   │   └── style.module.scss
│   │   └── header
│   │       ├── Header.tsx
│   │       └── style.module.scss
│   ├── logics # 演算系ロジックを記述する
│   │   └── getMonthRange # サンプルロジック
│   │       ├── getMonthRange.test.ts # ロジックはテスト必須
│   │       └── getMonthRange.ts # ロジック本体
│   ├── pages # ページコンポーネント
│   │   ├── not-found # 404ページ
│   │   │   └── index.tsx
│   │   ├── root # ルートページ
│   │   │   └── index.tsx
│   │   └── users # サンプルページ
│   │       └── index.tsx
│   ├── recoil # global state管理
│   │   └── auth.ts # サンプルグローバル変数 使う側はApp.tsxとHeader.tsxにある
│   └── types # 型定義(PropsとFormData以外の型はここに集約する)
│       ├── api.ts
│       └── user.ts
├── tsconfig.build.json
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```

## コンポーネントの最小化

- コンポーネントは可能な限り最小化する
- コンポーネント単位でCSSを記述する
- テキストボックス、ボタンなどの部品レベルのコンポーネントから作成する
- 部品をかき集めて作るページのいち部分をページ内のコンポーネントとして作成する

## 着手時

上記をよく読むこと  
サンプルコードがあるのでそれを参考にして作成する

# ざっくりとした開発手順

## 小さいコンポーネントから作成する

1. ボタン、テキストボックスなどのパーツ
2. パーツをいくつか配置したページの一部
3. ページ(なるべくページに直接パーツを使わない)

```sh
# コンポーネントの作成
yarn plop component
# ページの作成
yarn plop page
```

## コンポーネント単位でPRにする

例 ブランチ`feature/text-box`を切ってテキストボックスコンポーネントを作成しただけのPRを出す

## 必ずコンポーネント化する

- 再利用されないUIだとしても必ずコンポーネントとして作成すること
- パーツコンポーネント`src/common`は必ずstorybookも記述する(plopによる自動生成でファイルは作成される)

## 中サイズコンポーネントの作成

パーツ以上のコンポーネント作成時はstorybookを見て現在実装されているパーツコンポーネントを確認し、それらを組み合わせて中サイズのコンポーネントを作成する

### storybookの起動

```sh
yarn storybook
```

## コンポーネント内に直接ビジネスロジックを書かない

- コンポーネントの責務はUIの描画
- ビジネスロジックは`src/logics`へ切り出す
- UIのテストコードは思った通り動かなかったりして工数が嵩みやすいがlogicのテストコードは容易なため、logicに対しては必ずjestを記述する

### logicの作成

```sh
yarn plop logic
```

### APIの呼び出しロジック

apiとのやり取りは`src/api`へ切り出す

```sh
# API呼び出しロジックの作成
yarn plop api
```

# リポジトリ作成時の設定項目

## ブランチの作成

リポジトリを作成したらすぐにdevelopブランチを元にstagingブランチを作成、  
stagingブランチを元にproductionブランチを作成する

### ブランチについて

| Branch     | Description                                                                               |
| ---------- | ----------------------------------------------------------------------------------------- |
| develop    | デフォルトブランチ（開発ブランチ）                                                        |
| staging    | ステージング環境と同期するブランチ<br>developブランチへのマージ後に自動的にPRが作成される |
| production | 本番環境と同期するブランチ<br>stagingブランチへのマージ後に自動的にPRが作成される         |

## 推奨設定

### ブランチの保護

developブランチ、stagingブランチ、productionブランチについて直接のコミットを禁止する設定を行う

## Github Secretの設定

RepositoryのSecretに以下を追加する
| Name | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AWS_ACCESS_KEY_ID_PRD | 本番AWSアカウントのアクセスキー |
| AWS_SECRET_ACCESS_KEY_PRD | 本番AWSアカウントのシークレットアクセスキー |
| S3_BUCKET_NAME_PRD | 本番AWSアカウントのS3バケット名 |
| AWS_ACCESS_KEY_ID_STG | StagingAWSアカウントのアクセスキー |
| AWS_SECRET_ACCESS_KEY_STG | StagingAWSアカウントのシークレットアクセスキー |
| S3_BUCKET_NAME_STG | StagingAWSアカウントのS3バケット名 |
| AWS_ACCESS_KEY_ID_DEV | DevelopAWSアカウントのアクセスキー |
| AWS_SECRET_ACCESS_KEY_DEV | DevelopAWSアカウントのシークレットアクセスキー |
| S3_BUCKET_NAME_DEV | DevelopAWSアカウントのS3バケット名 |
| SLACK_WEBHOOK_URL | CI/CDの結果を通知するSlackチャンネルのWebhookURL |

## 参照するSlackWebhookURLの変更

defaultではOrganizationに設定されたSlackチャンネルに通知されるが、リポジトリ単位で通知先を変更したい場合は以下の設定を行う

1. `./.github/workflows`配下の以下のファイルを開く
   - `develop.yml`
   - `staging.yml`
   - `production.yml`
2. `RELAY_SLACK_WEBHOOK_URL`の値を変更する
   - 例: `RELAY_SLACK_WEBHOOK_URL: ${{ secrets.ORG_SLACK_WEBHOOK_URL }}` => `RELAY_SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}`
