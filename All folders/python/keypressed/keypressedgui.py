import tkinter as tk
from pynput import keyboard

class KeyPressApp:
    def __init__(self, master):
        self.master = master
        master.title("Zeus key press code")

        # Set the font size
        font_size = 16

        # Label to display the pressed key with increased font size
        self.label = tk.Label(master, text="Digite uma tecla:", font=("Outfit", font_size))
        self.label.pack(pady=10)

        # Create a set to keep track of pressed keys
        self.pressed_keys = set()

        # Start the listener to capture keyboard events
        self.listener = keyboard.Listener(on_press=self.on_key_press, on_release=self.on_key_release)
        self.listener.start()

    def mapper(self, key_str):
        print("VEIO ESSA BOSTA", type(key_str))
        print("VEIO ESSA BOSTA", key_str)
        key_mapping = {
            '\x01': "Ctrl + a"
        }
        # Use an f-string to include the variable in the print statement
        # print(f"RESPOSTA: {key_mapping[str(key_str)]}")

        if(key_mapping.get(key_str) == None):
            return key_str
        else:
            return key_mapping.get( key_str) == None


    def on_key_press(self, key):
        key_str = str(key)

        # Update the set of pressed keys
        self.pressed_keys.add(key_str)

        # Update the label with the pressed keys
        pressed_keys_text = " + ".join(sorted(self.pressed_keys))
        self.label.config(text=f"Teclas digitadas: {pressed_keys_text}")

    def on_key_release(self, key):
        key_str = str(key)

        # Map the key
        mapped_key = self.mapper(key_str)

        # Update the label with the mapped key
        self.label.config(text=f"Tecla digitada: {mapped_key}")

        # Remove the released key from the set
        if key_str in self.pressed_keys:
            self.pressed_keys.remove(key_str)

def main():
    root = tk.Tk()
    app = KeyPressApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()
