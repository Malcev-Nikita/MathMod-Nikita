import eel
import os

indexHTML = os.path.abspath('frontend/html/index.html')
example1HTML = os.path.abspath('frontend/html/example1.html')
example2HTML = os.path.abspath('frontend/html/example2.html')

mainCSS = os.path.abspath('frontend/css/main.css')

buttonstepJS = os.path.abspath('fronend/js/Class/button_step.js')
errorJS = os.path.abspath('fronend/js/Class/error.js')

example1JS = os.path.abspath('frontend/js/example1/example1.js')

example2JS = os.path.abspath('frontend/js/example2.js')

if __name__ == '__main__':
    eel.init("frontend")
    eel.start('html/index.html', mode="chrome", size=(1920, 1080))