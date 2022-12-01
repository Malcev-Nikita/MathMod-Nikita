import eel
import os


if __name__ == '__main__':
    eel.init("frontend")
    eel.start('html/index.html', mode="chrome", size=(1920, 1080))