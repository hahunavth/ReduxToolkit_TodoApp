import { useState, useEffect } from "react";

var synth = window.speechSynthesis;

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceSelect, setVoiceSelect] = useState(0);
  const [voiceList, setVoiceList] = useState([]);
  const [btnText, setBtnText] = useState("Play");

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;

    if (type === "textarea") {
      setText(value);
    } else if (name === "rate") {
      setRate(value);
    } else if (name === "pitch") {
      setPitch(value);
    } else if (name === "voice") {
      setVoiceSelect(value);
    } else {
      console.log("handleChange error type = " + type);
    }
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    speak();
    // inputTxt.blur();
  };

  function getVoices() {
    var voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(),
        bname = b.name.toUpperCase();
      if (aname < bname) return -1;
      else if (aname === bname) return 0;
      else return +1;
    });
    return voices;
  }

  function speak() {
    if (synth.speaking) {
      if (synth.paused) {
        synth.resume();
        setBtnText("Pause");
        console.log("resume");
      } else {
        synth.pause();
        setBtnText("Resume");
        console.log("pause");
      }
    } else if (text !== "") {
      var utterThis = new SpeechSynthesisUtterance(text);
      console.log(utterThis);

      //onboundary
      //e.charIndex -> vi tri dau tien cua tu dang duoc doc

      utterThis.onend = function (event) {
        setBtnText("Play");
        console.log("SpeechSynthesisUtterance.onend");
      };
      utterThis.onstart = function (event) {
        setBtnText("Pause");
        console.log("SpeechSynthesisUtterance.onend");
      };
      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
      };

      if (voiceSelect >= 0) utterThis.voice = voiceList[voiceSelect];

      utterThis.pitch = pitch;
      utterThis.rate = rate;
      synth.speak(utterThis);
    }
  }

  useEffect(() => {
    let voices = getVoices();
    setVoiceList([...voices]);
  }, []);

  useEffect(() => {
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = voiceSelect;
    }
  }, [voiceSelect]);

  return (
    <div>
      <h1>Speech synthesiser</h1>

      <p>
        Enter some text in the input below and press return or the "play" button
        to hear it. change voices using the dropdown menu.
      </p>

      <form className="inputForm" onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="txt"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div>
          <label htmlFor="rate">Rate</label>
          <input
            name="rate"
            type="range"
            min="0.5"
            max="2"
            value={rate}
            step="0.1"
            id="rate"
            onChange={handleChange}
          />
          <div className="rate-value">{rate}</div>
          <div className="clearfix"></div>
        </div>
        <div>
          <label htmlFor="pitch">Pitch</label>
          <input
            name="pitch"
            type="range"
            min="0"
            max="2"
            value={pitch}
            step="0.1"
            id="pitch"
            onChange={handleChange}
          />
          <div className="pitch-value">{pitch}</div>
          <div className="clearfix"></div>
        </div>
        <select name="voice" onChange={handleChange}>
          {voiceList.map((voice, index) => {
            return (
              <option key={index} value={index}>
                {voice.name}
              </option>
            );
          })}
        </select>
        <div className="controls">
          <button id="play" type="submit">
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextToSpeech;
