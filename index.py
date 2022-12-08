import eel


if __name__ == '__main__':
    eel.init('src')
    eel.start('index.html', mode="chrome", size=(1920, 1080))