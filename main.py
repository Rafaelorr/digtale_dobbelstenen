def on_button_pressed_a():
    global aantal_dobbelstenen
    if aantal_dobbelstenen == 100:
        basic.pause(10)
    else:
        aantal_dobbelstenen += 1
    basic.show_string("aantal")
    basic.pause(1000)
    basic.show_string("" + str((aantal_dobbelstenen)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global rol_resulaat
    rol_resulaat = 0
    for index in range(aantal_dobbelstenen):
        rol_resulaat += randint(1, soort_dobbelsteen)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    if True:
        pass
    elif True:
        pass
    elif True:
        pass
    elif True:
        pass
    elif True:
        pass
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global aantal_dobbelstenen
    if aantal_dobbelstenen == 1:
        basic.pause(10)
    else:
        aantal_dobbelstenen += -1
    basic.show_string("aantal")
    basic.pause(1000)
    basic.show_string("" + str((aantal_dobbelstenen)))
input.on_button_pressed(Button.B, on_button_pressed_b)

rol_resulaat = 0
aantal_dobbelstenen = 0
soort_dobbelsteen = 0
soort_dobbelsteen = 6
aantal_dobbelstenen = 1
rol_resulaat = 1

def on_forever():
    basic.show_string("" + str((rol_resulaat)))
basic.forever(on_forever)
