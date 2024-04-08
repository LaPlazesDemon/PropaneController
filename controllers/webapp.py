from controllers import gpio
import streamlit as st

st.title("Propane Pit Controller")
st.write("Toggle LED: ")
st.button("Toggle", type="primary", on_click=gpio.togglePin(26))