import { MIDIMessages } from '../constants/MIDIMessages';
import { TimeUtils } from '../utils/TimeUtils';
import { InstrumentUtils } from '../utils/InstrumentUtils';
import { MIDIControllerTypes } from '../constants/MIDIControllers';

const
  MAX_BYTES = 127,
  DELAY     = 1000
;

function programChange(trackIndex, midiMessage) {
  return (dispatch, getState) => {
    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.PROGRAM_CHANGE;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => dispatch({ type, payload }), deltaTime);
  };
}

function noteOn(trackIndex, midiMessage) {
  return (dispatch, getState) => {
    var state, instruments, instrument, deltaTime, type, payload, tracks, volume;

    state = getState();
    type = MIDIMessages.NOTE_ON;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);
    instruments = state.player.instruments;
    instrument = instruments[trackIndex];
    volume = state.midi.volumes ? state.midi.volumes[trackIndex] : MAX_BYTES;

    setTimeout(() => {
      dispatch({ type, payload });

      InstrumentUtils.play(
        midiMessage.noteNumber,
        instrument,
        state.midi.audioContext.currentTime,
        volume
      );

    }, deltaTime);
  };
}

function sequenceNumber(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.SEQUENCE_NUMBER;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function text(trackIndex, midiMessage) {
  return (dispatch, getState) => {
    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.TEXT;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function trackName(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.TRACK_NAME;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function lyrics(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.LYRICS;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function marker(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.MARKER;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function cuePoint(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.CUE_POINT;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function midiChannelPrefix(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.MIDI_CHANNEL_PREFIX;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function endOfTrack(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.END_OF_TRACK;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function setTempo(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, tempo, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.SET_TEMPO;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    tempo = TimeUtils.getBMP(midiMessage.microsecondsPerBeat, state.player.ticksPerBeat);

    payload = { tracks, trackIndex, midiMessage, tempo };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function smpteOffset(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.SMPTE_OFFSET;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function timeSignature(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime, signature;

    state = getState();
    type = MIDIMessages.TIME_SIGNATURE;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    signature = midiMessage.thirtyseconds;
    payload = { tracks, trackIndex, midiMessage, signature };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function keySignature(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.KEY_SIGNATURE;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function sequencerSpecific(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.SEQUENCER_SPECIFIC;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function sysEx(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.SYS_EX;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function dividedSysEx(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.DIVIDED_SYS_EX;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function last(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.LAST;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function noteOff(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime, instrument, instruments;

    state = getState();
    type = MIDIMessages.NOTE_OFF;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);
    instruments = state.player.instruments;
    instrument = instruments[trackIndex];

    setTimeout(() => {
      if (instrument) {
        instrument.stop();
      }

      dispatch({ type, payload });
    }, deltaTime + DELAY);
  };
}

function noteAftertouch(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.NOTE_AFTER_TOUCH;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function channelAftertouch(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.CHANNEL_AFTER_TOUCH;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function pitchBend(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.PITCH_BEND;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function controller(trackIndex, midiMessage) {
  return (dispatch, getState) => {
    var state, type, payload, tracks, deltaTime, volumes;

    state = getState();
    type = MIDIMessages.CONTROLLER;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    volumes = state.midi.volumes || new Array(tracks.length);

    if (midiMessage.controllerType === MIDIControllerTypes.VOLUME) {
      volumes[trackIndex] = midiMessage.value;
      payload = { tracks, trackIndex, midiMessage, volumes };

    } else if (midiMessage.controllerType === MIDIControllerTypes.VOLUME) {

    }

    deltaTime = (midiMessage.deltaTime !== 0) ?
      _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state) :
      midiMessage.deltaTime;

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

function unknown(trackIndex, midiMessage) {
  return (dispatch, getState) => {

    var state, type, payload, tracks, deltaTime;

    state = getState();
    type = MIDIMessages.UNKNOWN;
    tracks = _incrementTrackInfo.call(this, state.player.tracks, trackIndex, midiMessage);
    payload = { tracks, trackIndex, midiMessage };
    deltaTime = _getDeltaSeconds.call(this, midiMessage, tracks, trackIndex, state);

    setTimeout(() => {
      dispatch({ type, payload });
    }, deltaTime);
  };
}

export const MIDIActions = {
  sequenceNumber,
  text,
  trackName,
  lyrics,
  programChange,
  noteOn,
  marker,
  cuePoint,
  midiChannelPrefix,
  endOfTrack,
  setTempo,
  smpteOffset,
  timeSignature,
  keySignature,
  sequencerSpecific,
  sysEx,
  dividedSysEx,
  last,
  noteOff,
  noteAftertouch,
  channelAftertouch,
  pitchBend,
  controller,
  unknown
};

/* Private */

function _getDeltaSeconds(midiMessage, tracks, trackIndex, state) {
  return TimeUtils.getDeltaSeconds(
      tracks[trackIndex].currentDeltaTime,
      state.player.ticksPerBeat,
      state.midi.tempo,
      state.midi.signature
    );
}

function _incrementTrackInfo(tracks, trackIndex, midiMessage) {
  tracks[trackIndex].currentMessageIndex++;
  tracks[trackIndex].currentDeltaTime += midiMessage.deltaTime;

  return tracks;
}
