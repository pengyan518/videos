import React from 'react'
import Player from '@vimeo/player'
import eventNames from './eventNames'
// import {useAppDispatch} from "../../app/hooks";
// import {setVimeoInstance} from "../ShortVideoPage/shortsSlice";

interface VimeoProps {
  /**
   * A Vimeo video ID or URL.
   */
  video: number | string
  /**
   * DOM ID for the player element.
   */
  id: string
  /**
   * CSS className for the player element.
   */
  className: string
  /**
   * Inline style for container element.
   */
  style: object // eslint-disable-line react/forbid-prop-types
  /**
   * Width of the player element.
   */
  width: number | string
  /**
   * Height of the player element.
   */
  height: number | string

  /**
   * Pause the video.
   */
  paused: boolean // eslint-disable-line react/no-unused-prop-types

  /**
   * The playback volume as a number between 0 and 1.
   */
  volume: number

  /**
   * The time in seconds at which to start playing the video.
   */
  start: number

  // Player parameters
  /**
   * Pause this video automatically when another one plays.
   */
  autopause: boolean

  /**
   * Automatically start playback of the video. Note that this won’t work on
   * some devices.
   */
  autoplay: boolean

  /**
   * Show the byline on the video.
   */
  showByline: boolean

  /**
   * Specify the color of the video controls. Colors may be overridden by the
   * embed settings of the video. _(Ex: "ef2f9f")_
   */
  color: string

  /**
   * Blocks the player from tracking any session data, including all cookies and analytics.
   */
  dnt: boolean

  // Player controls
  /**
   * Hide all elements in the player, such as the progress bar, sharing buttons, etc.
   * (requires Vimeo PRO / Business account)
   */
  controls: boolean

  /**
   * Play the video again when it reaches the end.
   */
  loop: boolean

  /**
   * Show the portrait on the video.
   */
  showPortrait: boolean

  /**
   * Show the title on the video.
   */
  showTitle: boolean

  /**
   * Starts in a muted state to help with autoplay
   */
  muted: boolean

  /**
   * Starts in a background state with no controls to help with autoplay
   */
  background: boolean

  /**
   * Enable responsive mode and resize according to parent element (experimental)
   */
  responsive: boolean

  /**
   * Specify playback rate (requires Vimeo PRO / Business account)
   */
  playbackRate: number

  /**
   * Enable playback rate controls (requires Vimeo PRO / Business account)
   */
  speed: boolean

  /**
   * Allows for keyboard input to trigger player events.
   */
  keyboard: boolean

  /**
   * Show the picture-in-picture button in the controlbar
   * and enable the picture-in-picture API.
   */
  pip: boolean

  /**
   * Play video inline on mobile devices, to automatically
   * go fullscreen on playback set this parameter to false.
   */
  playsInline: boolean

  /**
   * Vimeo Plus, PRO, and Business members can default
   * an embedded video to a specific quality on desktop.
   */
  quality: string

  /**
   * Turn captions/subtitles on for a specific language by default.
   */
  textTrack: string

  /**
   * The responsive player and transparent background are enabled
   * by default, to disable set this parameter to false.
   */
  transparent: boolean

  // Events
  /* eslint-disable react/no-unused-prop-types */

  /**
   * Sent when the Vimeo player API has loaded.
   * Receives the Vimeo player object in the first parameter.
   */
  onReady: (player: any) => void
  /**
   * Sent when the player triggers an error.
   */
  onError: () => void
  /**
   * Triggered when video playback is initiated.
   */
  onPlay: () => void
  /**
   * Triggered when the video starts playing.
   */
  onPlaying: () => void
  /**
   * Triggered when the video pauses.
   */
  onPause: () => void
  /**
   * Triggered any time the video playback reaches the end.
   * Note: when `loop` is turned on, the ended event will not fire.
   */
  onEnd: () => void
  /**
   * Triggered as the `currentTime` of the video updates. It generally fires
   * every 250ms, but it may vary depending on the browser.
   */
  onTimeUpdate: () => void
  /**
   * Triggered as the video is loaded. Reports back the amount of the video
   * that has been buffered.
   */
  onProgress: () => void
  /**
   * Triggered when the player seeks to a specific time. An `onTimeUpdate`
   * event will also be fired at the same time.
   */
  onSeeked: () => void
  /**
   * Triggered when the active text track (captions/subtitles) changes. The
   * values will be `null` if text tracks are turned off.
   */
  onTextTrackChange: () => void
  /**
   * Triggered when the active cue for the current text track changes. It also
   * fires when the active text track changes. There may be multiple cues
   * active.
   */
  onCueChange: () => void
  /**
   * Triggered when the current time hits a registered cue point.
   */
  onCuePoint: () => void
  /**
   * Triggered when the volume in the player changes. Some devices do not
   * support setting the volume of the video independently from the system
   * volume, so this event will never fire on those devices.
   */
  onVolumeChange: () => void
  /**
   * Triggered when the playback rate changes.
   */
  onPlaybackRateChange: () => void
  /**
   * Triggered when a new video is loaded in the player.
   */
  onLoaded: () => void

  /* eslint-enable react/no-unused-prop-types */
}

class Vimeo extends React.Component {
  private static player: any

  constructor(props: VimeoProps) {
    super(props)

    this.refContainer = this.refContainer.bind(this)
  }

  componentDidMount() {
    this.createPlayer()
  }

  componentDidUpdate(prevProps: {[x: string]: any}) {
    // @ts-ignore
    const changes = Object.keys(this.props).filter(name => this.props[name] !== prevProps[name])

    this.updateProps(changes)
  }

  componentWillUnmount() {
    // @ts-ignore
    this.player.destroy()
  }

  /**
   * @private
   */
  getInitialOptions() {
    // @ts-ignore
    const {video} = this.props
    const videoType = /^https?:/i.test(video) ? 'url' : 'id'
    /* eslint-disable react/destructuring-assignment */

    return {
      [videoType]: video,
      // @ts-ignore
      width: this.props.width,
      // @ts-ignore
      height: this.props.height,
      // @ts-ignore
      autopause: this.props.autopause,
      // @ts-ignore
      autoplay: this.props.autoplay,
      // @ts-ignore
      byline: this.props.showByline,
      // @ts-ignore
      color: this.props.color,
      // @ts-ignore
      controls: this.props.controls,
      // @ts-ignore
      loop: this.props.loop,
      // @ts-ignore
      portrait: this.props.showPortrait,
      // @ts-ignore
      title: this.props.showTitle,
      // @ts-ignore
      muted: this.props.muted,
      // @ts-ignore
      background: this.props.background,
      // @ts-ignore
      responsive: this.props.responsive,
      // @ts-ignore
      dnt: this.props.dnt,
      // @ts-ignore
      speed: this.props.speed,
      // @ts-ignore
      keyboard: this.props.keyboard,
      // @ts-ignore
      pip: this.props.pip,
      // @ts-ignore
      playsinline: this.props.playsInline,
      // @ts-ignore
      quality: this.props.quality,
      // @ts-ignore
      texttrack: this.props.textTrack,
      // @ts-ignore
      transparent: this.props.transparent,
    }
    /* eslint-enable react/destructuring-assignment */
  }

  /**
   * @private
   */
  updateProps(propNames: any[]) {
    // @ts-ignore
    const {player} = this
    propNames.forEach(name => {
      // eslint-disable-next-line react/destructuring-assignment
      // @ts-ignore
      const value = this.props[name]
      switch (name) {
        case 'autopause':
          player.setAutopause(value)
          break
        case 'color':
          player.setColor(value)
          break
        case 'loop':
          player.setLoop(value)
          break
        case 'volume':
          player.setVolume(value)
          break
        case 'paused':
          player.getPaused().then((paused: boolean) => {
            if (value && !paused) {
              return player.pause()
            }
            if (!value && paused) {
              return player.play()
            }
            return null
          })
          break
        case 'width':
        case 'height':
          player.element[name] = value
          break
        case 'video':
          if (value) {
            // @ts-ignore
            const {start} = this.props
            const loaded = player.loadVideo(value)
            // Set the start time only when loading a new video.
            // It seems like this has to be done after the video has loaded, else it just starts at
            // the beginning!
            if (typeof start === 'number') {
              loaded.then(() => {
                player.setCurrentTime(start)
              })
            }
          } else {
            player.unload()
          }
          break
        case 'playbackRate':
          player.setPlaybackRate(value)
          break
        case 'quality':
          player.setQuality(value)
          break
        default:
        // Nothing
      }
    })
  }

  // static vimeoPlayer() {
  //   return this.player
  // }

  /**
   * @private
   */
  createPlayer() {
    // @ts-ignore
    const {start, volume, playbackRate} = this.props

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const dispatch = useAppDispatch()

    // @ts-ignore
    // eslint-disable-next-line no-multi-assign
    this.player = new Player(this.container, this.getInitialOptions())
    // @ts-ignore
    // window.vimeoPlayer = this.player
    // @ts-ignore
    const {onError, onReady} = this.props
    // @ts-ignore
    this.player.ready().then(
      () => {
        if (onReady) {
          // @ts-ignore
          onReady(this.player)
        }

        Object.keys(eventNames).forEach(dmName => {
          // @ts-ignore
          const reactName = eventNames[dmName]
          // @ts-ignore
          this.player.on(dmName, event => {
            // @ts-ignore
            const handler = this.props[reactName]
            if (handler) {
              handler(event)
            }
          })
        })
      },
      // @ts-ignore
      err => {
        if (onError) {
          onError(err)
        } else {
          throw err
        }
      }
    )

    if (typeof start === 'number') {
      // @ts-ignore
      this.player.setCurrentTime(start)
    }

    if (typeof volume === 'number') {
      this.updateProps(['volume'])
    }

    if (typeof playbackRate === 'number') {
      this.updateProps(['playbackRate'])
    }
  }

  /**
   * @private
   */
  refContainer(container: any) {
    // @ts-ignore
    this.container = container
  }

  render() {
    // @ts-ignore
    const {id, className, style} = this.props

    return <div id={id} className={className} style={style} ref={this.refContainer} />
  }
}

// @ts-ignore
Vimeo.defaultProps = {
  autopause: true,
  autoplay: false,
  showByline: true,
  controls: true,
  loop: false,
  showPortrait: true,
  showTitle: true,
  muted: false,
  background: false,
  responsive: false,
  dnt: false,
  speed: false,
  keyboard: true,
  pip: false,
  playsInline: true,
  transparent: true,
}

export default Vimeo
