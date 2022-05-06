---
layout: ../../layouts/MarkdownLayout.astro
title: Использование нескольких GPG-ключей в Git
description: Небольшая инструкция для тех, кто хочет подписывать коммиты или теги разными GPG-ключами.
date: 27 ноября 2021
---

# Использование нескольких GPG-ключей в Git

1. Генерируем ключи:

```bash
$ gpg --generate-key
```

2. Копируем ID ключей:

```bash
$ gpg --list-secret-keys --keyid-format=long
----------------------------
sec   rsa3072/8B7B750DE1510076 2021-11-26 [SC] [expires: 2023-11-26]
        95A44D440CA3AB56836A44BC8B7B750DE1510076
uid   [ultimate] Semen Syrovatskiy <mail@syrovatskiy.tk>
ssb   rsa3072/1B2A34DB58D65474 2021-11-26 [E] [expires: 2023-11-26]
```

В примере выше ID ключа будет равен `8B7B750DE1510076`.

3. Экспортируем ключи с нужными ID:

```bash
$ gpg --armor --export 8B7B750DE1510076
-----BEGIN PGP PUBLIC KEY BLOCK-----
....................................
-----END PGP PUBLIC KEY BLOCK-----
```

4. Добавляем ключи в Git:

Копируем блок публичного ключа и добавляем его в Git (например, в Github надо перейти в Settings -> SSH and GPG keys). При необходимости после добавления ключа верифицируем email, который был указан при его генерации на шаге 1.

5. Создаём конфиги и редактируем `.gitconfig`:

```bash
# ~/.config/git/default

[user]
name = Semen Syrovatskiy
email = mail@syrovatskiy.tk
signinKey = 8B7B750DE1510076
```

```bash
# ~/.config/git/work

[user]
name = Semen Syrovatskiy
email = syrovatskiy@qapl.ru
signinKey = 9993D7308BBCB218
```

```bash
# ~/.gitconfig

[commit]
gpgSign = true

[include]
path = ~/.config/git/default

[includeIf "gitdir:~/Git/Work/**/.git"]
path = ~/.config/git/work
```

6. Проверяем, что всё работает:

```bash
$ cd ~/Git/Personal/my-personal-project/
$ git config user.signinkey
8B7B750DE1510076
$ cd ~/Git/Work/my-work-project/
$ git config user.signinkey
9993D7308BBCB218
```

Теперь Git будет сам понимать, какой из GPG-ключей где нужно использовать.
