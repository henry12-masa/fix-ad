// Prometheus Certified Associate PCA - 180 questions
window.quizData = window.quizData || {};
window.quizData["prometheus-pca"] = {
  "id": "prometheus-pca",
  "title": "Prometheus Certified Associate PCA",
  "category": "監視・SRE",
  "questionCount": 180,
  "questions": [
    {
      "id": 1,
      "question": "Prometheus Certified Associate PCAにおける「Prometheus」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "Prometheusの役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること"
      ],
      "answer": 1,
      "explanation": "PrometheusはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 2,
      "question": "Prometheus Certified Associate PCAで「メトリクス」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "メトリクスを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 3,
      "question": "Prometheus Certified Associate PCAの試験問題で「PromQL」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 2,
      "explanation": "PromQLは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 4,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する"
      ],
      "answer": 0,
      "explanation": "障害対応では、Alertmanagerに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 5,
      "question": "Prometheus Certified Associate PCAの学習で「Exporter」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "Exporterは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 6,
      "question": "Prometheus Certified Associate PCAにおける「スクレイプ」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "スクレイプの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 1,
      "explanation": "スクレイプはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 7,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 2,
      "explanation": "Service Discoveryを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 8,
      "question": "Prometheus Certified Associate PCAの試験問題で「ラベル」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "ラベルは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 9,
      "question": "Prometheus Certified Associate PCAで「時系列DB」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 2,
      "explanation": "障害対応では、時系列DBに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 10,
      "question": "Prometheus Certified Associate PCAの学習で「アラート」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "アラートは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 11,
      "question": "Prometheus Certified Associate PCAにおける「Grafana」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "Grafanaの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること"
      ],
      "answer": 0,
      "explanation": "GrafanaはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 12,
      "question": "Prometheus Certified Associate PCAで「可用性」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "可用性を安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 13,
      "question": "Prometheus Certified Associate PCAの試験問題で「Prometheus」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "Prometheusは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 14,
      "question": "Prometheus Certified Associate PCAで「メトリクス」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、メトリクスに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 15,
      "question": "Prometheus Certified Associate PCAの学習で「PromQL」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "PromQLは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 16,
      "question": "Prometheus Certified Associate PCAにおける「Alertmanager」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "Alertmanagerの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 1,
      "explanation": "AlertmanagerはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 17,
      "question": "Prometheus Certified Associate PCAで「Exporter」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること"
      ],
      "answer": 1,
      "explanation": "Exporterを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 18,
      "question": "Prometheus Certified Associate PCAの試験問題で「スクレイプ」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 1,
      "explanation": "スクレイプは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 19,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Service Discoveryに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 20,
      "question": "Prometheus Certified Associate PCAの学習で「ラベル」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 1,
      "explanation": "ラベルは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 21,
      "question": "Prometheus Certified Associate PCAにおける「時系列DB」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "時系列DBの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること"
      ],
      "answer": 1,
      "explanation": "時系列DBはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 22,
      "question": "Prometheus Certified Associate PCAで「アラート」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 1,
      "explanation": "アラートを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 23,
      "question": "Prometheus Certified Associate PCAの試験問題で「Grafana」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "Grafanaは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 24,
      "question": "Prometheus Certified Associate PCAで「可用性」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、可用性に関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 25,
      "question": "Prometheus Certified Associate PCAの学習で「Prometheus」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "Prometheusは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 26,
      "question": "Prometheus Certified Associate PCAにおける「メトリクス」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "メトリクスの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 2,
      "explanation": "メトリクスはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 27,
      "question": "Prometheus Certified Associate PCAで「PromQL」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "PromQLを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 28,
      "question": "Prometheus Certified Associate PCAの試験問題で「Alertmanager」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 0,
      "explanation": "Alertmanagerは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 29,
      "question": "Prometheus Certified Associate PCAで「Exporter」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 2,
      "explanation": "障害対応では、Exporterに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 30,
      "question": "Prometheus Certified Associate PCAの学習で「スクレイプ」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "スクレイプは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 31,
      "question": "Prometheus Certified Associate PCAにおける「Service Discovery」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "Service Discoveryの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 0,
      "explanation": "Service DiscoveryはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 32,
      "question": "Prometheus Certified Associate PCAで「ラベル」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること"
      ],
      "answer": 2,
      "explanation": "ラベルを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 33,
      "question": "Prometheus Certified Associate PCAの試験問題で「時系列DB」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "時系列DBは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 34,
      "question": "Prometheus Certified Associate PCAで「アラート」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、アラートに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 35,
      "question": "Prometheus Certified Associate PCAの学習で「Grafana」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "Grafanaは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 36,
      "question": "Prometheus Certified Associate PCAにおける「可用性」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること",
        "可用性の役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "可用性はPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 37,
      "question": "Prometheus Certified Associate PCAで「Prometheus」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること"
      ],
      "answer": 1,
      "explanation": "Prometheusを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 38,
      "question": "Prometheus Certified Associate PCAの試験問題で「メトリクス」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 0,
      "explanation": "メトリクスは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 39,
      "question": "Prometheus Certified Associate PCAで「PromQL」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する"
      ],
      "answer": 0,
      "explanation": "障害対応では、PromQLに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 40,
      "question": "Prometheus Certified Associate PCAの学習で「Alertmanager」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "Alertmanagerは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 41,
      "question": "Prometheus Certified Associate PCAにおける「Exporter」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "Exporterの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること"
      ],
      "answer": 2,
      "explanation": "ExporterはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 42,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "スクレイプを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 43,
      "question": "Prometheus Certified Associate PCAの試験問題で「Service Discovery」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "Service Discoveryは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 44,
      "question": "Prometheus Certified Associate PCAで「ラベル」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、ラベルに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 45,
      "question": "Prometheus Certified Associate PCAの学習で「時系列DB」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "時系列DBは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 46,
      "question": "Prometheus Certified Associate PCAにおける「アラート」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること",
        "アラートの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること"
      ],
      "answer": 2,
      "explanation": "アラートはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 47,
      "question": "Prometheus Certified Associate PCAで「Grafana」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "Grafanaを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 48,
      "question": "Prometheus Certified Associate PCAの試験問題で「可用性」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 0,
      "explanation": "可用性は単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 49,
      "question": "Prometheus Certified Associate PCAで「Prometheus」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Prometheusに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 50,
      "question": "Prometheus Certified Associate PCAの学習で「メトリクス」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "メトリクスは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 51,
      "question": "Prometheus Certified Associate PCAにおける「PromQL」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "PromQLの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 0,
      "explanation": "PromQLはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 52,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Alertmanagerを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 53,
      "question": "Prometheus Certified Associate PCAの試験問題で「Exporter」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 0,
      "explanation": "Exporterは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 54,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、スクレイプに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 55,
      "question": "Prometheus Certified Associate PCAの学習で「Service Discovery」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "Service Discoveryは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 56,
      "question": "Prometheus Certified Associate PCAにおける「ラベル」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "ラベルの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること"
      ],
      "answer": 0,
      "explanation": "ラベルはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 57,
      "question": "Prometheus Certified Associate PCAで「時系列DB」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 1,
      "explanation": "時系列DBを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 58,
      "question": "Prometheus Certified Associate PCAの試験問題で「アラート」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "アラートは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 59,
      "question": "Prometheus Certified Associate PCAで「Grafana」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、Grafanaに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 60,
      "question": "Prometheus Certified Associate PCAの学習で「可用性」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない"
      ],
      "answer": 1,
      "explanation": "可用性は実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 61,
      "question": "Prometheus Certified Associate PCAにおける「Prometheus」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "Prometheusの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること"
      ],
      "answer": 1,
      "explanation": "PrometheusはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 62,
      "question": "Prometheus Certified Associate PCAで「メトリクス」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "メトリクスを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 63,
      "question": "Prometheus Certified Associate PCAの試験問題で「PromQL」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "PromQLは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 64,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する"
      ],
      "answer": 1,
      "explanation": "障害対応では、Alertmanagerに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 65,
      "question": "Prometheus Certified Associate PCAの学習で「Exporter」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "Exporterは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 66,
      "question": "Prometheus Certified Associate PCAにおける「スクレイプ」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること",
        "スクレイプの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "スクレイプはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 67,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 1,
      "explanation": "Service Discoveryを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 68,
      "question": "Prometheus Certified Associate PCAの試験問題で「ラベル」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 1,
      "explanation": "ラベルは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 69,
      "question": "Prometheus Certified Associate PCAで「時系列DB」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、時系列DBに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 70,
      "question": "Prometheus Certified Associate PCAの学習で「アラート」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 0,
      "explanation": "アラートは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 71,
      "question": "Prometheus Certified Associate PCAにおける「Grafana」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "Grafanaの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 0,
      "explanation": "GrafanaはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 72,
      "question": "Prometheus Certified Associate PCAで「可用性」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 1,
      "explanation": "可用性を安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 73,
      "question": "Prometheus Certified Associate PCAの試験問題で「Prometheus」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 0,
      "explanation": "Prometheusは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 74,
      "question": "Prometheus Certified Associate PCAで「メトリクス」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、メトリクスに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 75,
      "question": "Prometheus Certified Associate PCAの学習で「PromQL」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない"
      ],
      "answer": 0,
      "explanation": "PromQLは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 76,
      "question": "Prometheus Certified Associate PCAにおける「Alertmanager」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "Alertmanagerの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "AlertmanagerはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 77,
      "question": "Prometheus Certified Associate PCAで「Exporter」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Exporterを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 78,
      "question": "Prometheus Certified Associate PCAの試験問題で「スクレイプ」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "スクレイプは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 79,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、Service Discoveryに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 80,
      "question": "Prometheus Certified Associate PCAの学習で「ラベル」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "ラベルは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 81,
      "question": "Prometheus Certified Associate PCAにおける「時系列DB」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "時系列DBの役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 2,
      "explanation": "時系列DBはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 82,
      "question": "Prometheus Certified Associate PCAで「アラート」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "アラートを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 83,
      "question": "Prometheus Certified Associate PCAの試験問題で「Grafana」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "Grafanaは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 84,
      "question": "Prometheus Certified Associate PCAで「可用性」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、可用性に関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 85,
      "question": "Prometheus Certified Associate PCAの学習で「Prometheus」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "Prometheusは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 86,
      "question": "Prometheus Certified Associate PCAにおける「メトリクス」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "メトリクスの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 1,
      "explanation": "メトリクスはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 87,
      "question": "Prometheus Certified Associate PCAで「PromQL」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "PromQLを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 88,
      "question": "Prometheus Certified Associate PCAの試験問題で「Alertmanager」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 1,
      "explanation": "Alertmanagerは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 89,
      "question": "Prometheus Certified Associate PCAで「Exporter」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Exporterに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 90,
      "question": "Prometheus Certified Associate PCAの学習で「スクレイプ」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 2,
      "explanation": "スクレイプは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 91,
      "question": "Prometheus Certified Associate PCAにおける「Service Discovery」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "Service Discoveryの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "Service DiscoveryはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 92,
      "question": "Prometheus Certified Associate PCAで「ラベル」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 1,
      "explanation": "ラベルを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 93,
      "question": "Prometheus Certified Associate PCAの試験問題で「時系列DB」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 2,
      "explanation": "時系列DBは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 94,
      "question": "Prometheus Certified Associate PCAで「アラート」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する"
      ],
      "answer": 1,
      "explanation": "障害対応では、アラートに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 95,
      "question": "Prometheus Certified Associate PCAの学習で「Grafana」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "Grafanaは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 96,
      "question": "Prometheus Certified Associate PCAにおける「可用性」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること",
        "可用性の役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "可用性はPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 97,
      "question": "Prometheus Certified Associate PCAで「Prometheus」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Prometheusを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 98,
      "question": "Prometheus Certified Associate PCAの試験問題で「メトリクス」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 2,
      "explanation": "メトリクスは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 99,
      "question": "Prometheus Certified Associate PCAで「PromQL」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する"
      ],
      "answer": 0,
      "explanation": "障害対応では、PromQLに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 100,
      "question": "Prometheus Certified Associate PCAの学習で「Alertmanager」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "Alertmanagerは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 101,
      "question": "Prometheus Certified Associate PCAにおける「Exporter」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "Exporterの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "ExporterはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 102,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "スクレイプを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 103,
      "question": "Prometheus Certified Associate PCAの試験問題で「Service Discovery」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 1,
      "explanation": "Service Discoveryは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 104,
      "question": "Prometheus Certified Associate PCAで「ラベル」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 1,
      "explanation": "障害対応では、ラベルに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 105,
      "question": "Prometheus Certified Associate PCAの学習で「時系列DB」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "時系列DBは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 106,
      "question": "Prometheus Certified Associate PCAにおける「アラート」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "アラートの役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 2,
      "explanation": "アラートはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 107,
      "question": "Prometheus Certified Associate PCAで「Grafana」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Grafanaを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 108,
      "question": "Prometheus Certified Associate PCAの試験問題で「可用性」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "可用性は単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 109,
      "question": "Prometheus Certified Associate PCAで「Prometheus」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 2,
      "explanation": "障害対応では、Prometheusに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 110,
      "question": "Prometheus Certified Associate PCAの学習で「メトリクス」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "メトリクスは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 111,
      "question": "Prometheus Certified Associate PCAにおける「PromQL」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "PromQLの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "PromQLはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 112,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "Alertmanagerを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 113,
      "question": "Prometheus Certified Associate PCAの試験問題で「Exporter」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "Exporterは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 114,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 0,
      "explanation": "障害対応では、スクレイプに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 115,
      "question": "Prometheus Certified Associate PCAの学習で「Service Discovery」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない"
      ],
      "answer": 1,
      "explanation": "Service Discoveryは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 116,
      "question": "Prometheus Certified Associate PCAにおける「ラベル」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること",
        "ラベルの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 2,
      "explanation": "ラベルはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 117,
      "question": "Prometheus Certified Associate PCAで「時系列DB」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "時系列DBを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 118,
      "question": "Prometheus Certified Associate PCAの試験問題で「アラート」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "アラートは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 119,
      "question": "Prometheus Certified Associate PCAで「Grafana」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する"
      ],
      "answer": 0,
      "explanation": "障害対応では、Grafanaに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 120,
      "question": "Prometheus Certified Associate PCAの学習で「可用性」を効率よく覚える方法はどれですか？",
      "choices": [
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "選択肢を毎回ランダムに選ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない"
      ],
      "answer": 0,
      "explanation": "可用性は実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 121,
      "question": "Prometheus Certified Associate PCAにおける「Prometheus」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "Prometheusの役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 0,
      "explanation": "PrometheusはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 122,
      "question": "Prometheus Certified Associate PCAで「メトリクス」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "メトリクスを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 123,
      "question": "Prometheus Certified Associate PCAの試験問題で「PromQL」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "PromQLは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 124,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、Alertmanagerに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 125,
      "question": "Prometheus Certified Associate PCAの学習で「Exporter」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "Exporterは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 126,
      "question": "Prometheus Certified Associate PCAにおける「スクレイプ」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "スクレイプの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること"
      ],
      "answer": 0,
      "explanation": "スクレイプはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 127,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 2,
      "explanation": "Service Discoveryを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 128,
      "question": "Prometheus Certified Associate PCAの試験問題で「ラベル」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 0,
      "explanation": "ラベルは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 129,
      "question": "Prometheus Certified Associate PCAで「時系列DB」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する"
      ],
      "answer": 2,
      "explanation": "障害対応では、時系列DBに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 130,
      "question": "Prometheus Certified Associate PCAの学習で「アラート」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない"
      ],
      "answer": 2,
      "explanation": "アラートは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 131,
      "question": "Prometheus Certified Associate PCAにおける「Grafana」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "Grafanaの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 1,
      "explanation": "GrafanaはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 132,
      "question": "Prometheus Certified Associate PCAで「可用性」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "可用性を安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 133,
      "question": "Prometheus Certified Associate PCAの試験問題で「Prometheus」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 2,
      "explanation": "Prometheusは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 134,
      "question": "Prometheus Certified Associate PCAで「メトリクス」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "原因を確認せずすべて削除する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する"
      ],
      "answer": 1,
      "explanation": "障害対応では、メトリクスに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 135,
      "question": "Prometheus Certified Associate PCAの学習で「PromQL」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "PromQLは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 136,
      "question": "Prometheus Certified Associate PCAにおける「Alertmanager」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること",
        "Alertmanagerの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "AlertmanagerはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 137,
      "question": "Prometheus Certified Associate PCAで「Exporter」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Exporterを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 138,
      "question": "Prometheus Certified Associate PCAの試験問題で「スクレイプ」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "スクレイプは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 139,
      "question": "Prometheus Certified Associate PCAで「Service Discovery」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Service Discoveryに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 140,
      "question": "Prometheus Certified Associate PCAの学習で「ラベル」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "ラベルは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 141,
      "question": "Prometheus Certified Associate PCAにおける「時系列DB」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "時系列DBの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること"
      ],
      "answer": 1,
      "explanation": "時系列DBはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 142,
      "question": "Prometheus Certified Associate PCAで「アラート」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること"
      ],
      "answer": 3,
      "explanation": "アラートを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 143,
      "question": "Prometheus Certified Associate PCAの試験問題で「Grafana」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 1,
      "explanation": "Grafanaは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 144,
      "question": "Prometheus Certified Associate PCAで「可用性」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、可用性に関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 145,
      "question": "Prometheus Certified Associate PCAの学習で「Prometheus」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない"
      ],
      "answer": 2,
      "explanation": "Prometheusは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 146,
      "question": "Prometheus Certified Associate PCAにおける「メトリクス」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "関係のないハードウェアを交換すること",
        "メトリクスの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 1,
      "explanation": "メトリクスはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 147,
      "question": "Prometheus Certified Associate PCAで「PromQL」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 0,
      "explanation": "PromQLを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 148,
      "question": "Prometheus Certified Associate PCAの試験問題で「Alertmanager」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 1,
      "explanation": "Alertmanagerは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 149,
      "question": "Prometheus Certified Associate PCAで「Exporter」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Exporterに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 150,
      "question": "Prometheus Certified Associate PCAの学習で「スクレイプ」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 2,
      "explanation": "スクレイプは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 151,
      "question": "Prometheus Certified Associate PCAにおける「Service Discovery」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること",
        "試験名だけを暗記して仕組みを無視すること",
        "Service Discoveryの役割を理解し、設計・設定・運用に正しく活用すること"
      ],
      "answer": 3,
      "explanation": "Service DiscoveryはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 152,
      "question": "Prometheus Certified Associate PCAで「ラベル」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 1,
      "explanation": "ラベルを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 153,
      "question": "Prometheus Certified Associate PCAの試験問題で「時系列DB」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "時系列DBは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 154,
      "question": "Prometheus Certified Associate PCAで「アラート」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "監視を止めて放置する"
      ],
      "answer": 1,
      "explanation": "障害対応では、アラートに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 155,
      "question": "Prometheus Certified Associate PCAの学習で「Grafana」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "Grafanaは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 156,
      "question": "Prometheus Certified Associate PCAにおける「可用性」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "可用性の役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 1,
      "explanation": "可用性はPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 157,
      "question": "Prometheus Certified Associate PCAで「Prometheus」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "本番環境で検証なしに無作為に設定すること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 0,
      "explanation": "Prometheusを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 158,
      "question": "Prometheus Certified Associate PCAの試験問題で「メトリクス」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ"
      ],
      "answer": 1,
      "explanation": "メトリクスは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 159,
      "question": "Prometheus Certified Associate PCAで「PromQL」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する"
      ],
      "answer": 1,
      "explanation": "障害対応では、PromQLに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 160,
      "question": "Prometheus Certified Associate PCAの学習で「Alertmanager」を効率よく覚える方法はどれですか？",
      "choices": [
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ"
      ],
      "answer": 1,
      "explanation": "Alertmanagerは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 161,
      "question": "Prometheus Certified Associate PCAにおける「Exporter」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "画面の色だけを変更すること",
        "Exporterの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 2,
      "explanation": "ExporterはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 162,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "ログを残さず変更履歴も管理しないこと",
        "本番環境で検証なしに無作為に設定すること"
      ],
      "answer": 1,
      "explanation": "スクレイプを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 163,
      "question": "Prometheus Certified Associate PCAの試験問題で「Service Discovery」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "選択肢の長さだけで選ぶ"
      ],
      "answer": 0,
      "explanation": "Service Discoveryは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 164,
      "question": "Prometheus Certified Associate PCAで「ラベル」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "関係ないサービスを無作為に再起動する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 0,
      "explanation": "障害対応では、ラベルに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 165,
      "question": "Prometheus Certified Associate PCAの学習で「時系列DB」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない",
        "公式情報をまったく見ない"
      ],
      "answer": 1,
      "explanation": "時系列DBは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 166,
      "question": "Prometheus Certified Associate PCAにおける「アラート」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "画面の色だけを変更すること",
        "アラートの役割を理解し、設計・設定・運用に正しく活用すること",
        "試験名だけを暗記して仕組みを無視すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 1,
      "explanation": "アラートはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 167,
      "question": "Prometheus Certified Associate PCAで「Grafana」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "本番環境で検証なしに無作為に設定すること",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと"
      ],
      "answer": 1,
      "explanation": "Grafanaを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 168,
      "question": "Prometheus Certified Associate PCAの試験問題で「可用性」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "問題文を読まずに毎回同じ番号を選ぶ",
        "選択肢の長さだけで選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 2,
      "explanation": "可用性は単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 169,
      "question": "Prometheus Certified Associate PCAで「Prometheus」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する"
      ],
      "answer": 0,
      "explanation": "障害対応では、Prometheusに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 170,
      "question": "Prometheus Certified Associate PCAの学習で「メトリクス」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "公式情報をまったく見ない",
        "名称だけを丸暗記して用途を確認しない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ"
      ],
      "answer": 3,
      "explanation": "メトリクスは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 171,
      "question": "Prometheus Certified Associate PCAにおける「PromQL」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "試験名だけを暗記して仕組みを無視すること",
        "PromQLの役割を理解し、設計・設定・運用に正しく活用すること",
        "画面の色だけを変更すること",
        "関係のないハードウェアを交換すること"
      ],
      "answer": 1,
      "explanation": "PromQLはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 172,
      "question": "Prometheus Certified Associate PCAで「Alertmanager」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること",
        "すべてのユーザーに管理者権限を付けること"
      ],
      "answer": 1,
      "explanation": "Alertmanagerを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 173,
      "question": "Prometheus Certified Associate PCAの試験問題で「Exporter」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える",
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ"
      ],
      "answer": 0,
      "explanation": "Exporterは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 174,
      "question": "Prometheus Certified Associate PCAで「スクレイプ」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "ログ、設定、変更履歴、依存関係を順に確認する",
        "関係ないサービスを無作為に再起動する",
        "原因を確認せずすべて削除する"
      ],
      "answer": 1,
      "explanation": "障害対応では、スクレイプに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 175,
      "question": "Prometheus Certified Associate PCAの学習で「Service Discovery」を効率よく覚える方法はどれですか？",
      "choices": [
        "公式情報をまったく見ない",
        "選択肢を毎回ランダムに選ぶ",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない"
      ],
      "answer": 2,
      "explanation": "Service Discoveryは実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    },
    {
      "id": 176,
      "question": "Prometheus Certified Associate PCAにおける「ラベル」の主な目的として最も適切なものはどれですか？",
      "choices": [
        "ラベルの役割を理解し、設計・設定・運用に正しく活用すること",
        "関係のないハードウェアを交換すること",
        "画面の色だけを変更すること",
        "試験名だけを暗記して仕組みを無視すること"
      ],
      "answer": 0,
      "explanation": "ラベルはPrometheus Certified Associate PCAの重要範囲であり、目的・仕組み・利用場面を理解することが大切です。"
    },
    {
      "id": 177,
      "question": "Prometheus Certified Associate PCAで「時系列DB」を運用するとき、最も重要な考え方はどれですか？",
      "choices": [
        "すべてのユーザーに管理者権限を付けること",
        "ログを残さず変更履歴も管理しないこと",
        "セキュリティ、可用性、性能、保守性をバランスよく考えること",
        "本番環境で検証なしに無作為に設定すること"
      ],
      "answer": 2,
      "explanation": "時系列DBを安定して使うには、セキュリティ・可用性・性能・保守性のバランスが重要です。"
    },
    {
      "id": 178,
      "question": "Prometheus Certified Associate PCAの試験問題で「アラート」が出た場合、判断のポイントとして正しいものはどれですか？",
      "choices": [
        "選択肢の長さだけで選ぶ",
        "問題文を読まずに毎回同じ番号を選ぶ",
        "知らない単語がある選択肢を必ず選ぶ",
        "用語の意味、ユースケース、制限事項、関連サービスを合わせて考える"
      ],
      "answer": 3,
      "explanation": "アラートは単語だけでなく、ユースケースや制限事項まで理解すると正答しやすくなります。"
    },
    {
      "id": 179,
      "question": "Prometheus Certified Associate PCAで「Grafana」に関する障害を調べる基本手順として適切なのはどれですか？",
      "choices": [
        "監視を止めて放置する",
        "原因を確認せずすべて削除する",
        "関係ないサービスを無作為に再起動する",
        "ログ、設定、変更履歴、依存関係を順に確認する"
      ],
      "answer": 3,
      "explanation": "障害対応では、Grafanaに関係するログ・設定・変更履歴・依存関係を確認して切り分けます。"
    },
    {
      "id": 180,
      "question": "Prometheus Certified Associate PCAの学習で「可用性」を効率よく覚える方法はどれですか？",
      "choices": [
        "選択肢を毎回ランダムに選ぶ",
        "公式情報をまったく見ない",
        "基本用語、構成例、実務での使い方、よくあるミスをセットで学ぶ",
        "名称だけを丸暗記して用途を確認しない"
      ],
      "answer": 2,
      "explanation": "可用性は実際の構成例や運用例と結びつけて覚えると、試験対策にも実務にも役立ちます。"
    }
  ]
};
