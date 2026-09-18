/**
 *
 */
class Option {
  public readonly enabled: boolean;
  public readonly language: string;
  public readonly colorCode: string;
  public readonly lineWidth: number;
  public readonly commandTextOn: boolean;
  public readonly actionTextOn: boolean;
  public readonly trailOn: boolean;

  public readonly gestureCloseTab: string;
  public readonly gestureCloseTabWithoutPinned: string;
  public readonly gestureNewTab: string;
  public readonly gestureNewTabBackground: string;
  public readonly gestureDuplicateTab: string;
  public readonly gesturePinTab: string;
  public readonly gestureReload: string;
  public readonly gestureForward: string;
  public readonly gestureBack: string;
  public readonly gestureScrollTop: string;
  public readonly gestureScrollBottom: string;
  public readonly gestureLastTab: string;
  public readonly gestureReloadAll: string;
  public readonly gestureNextTab: string;
  public readonly gesturePrevTab: string;
  public readonly gestureCloseRightTabWithoutPinned: string;
  public readonly gestureCloseRightTab: string;
  public readonly gestureCloseLeftTabWithoutPinned: string;
  public readonly gestureCloseLeftTab: string;
  public readonly gestureCloseAllBackground: string;
  public readonly gestureCloseAll: string;
  public readonly gestureOpenOption: string;
  public readonly gestureOpenExtension: string;
  // public readonly gestureRestart: string;
  public readonly gestureWindowMaximize: string;
  public readonly gestureWindowMinimize: string;
  public readonly gestureWindowNormalize: string;

  /**
     *
     * @param {any} value
     */
  constructor(value) {
    this.enabled = typeof value.enabled === 'boolean' ? value.enabled : true;
    this.language =
      value.language === 'English' || value.language === 'Japanese'
        ? value.language
        : 'Japanese';
    const isHexColor =
      typeof value.color_code === 'string' && /^#([0-9a-fA-F]{3}){1,2}$/.test(value.color_code);
    this.colorCode = isHexColor ? value.color_code : '#FF0000';

    const parsedLineWidth = typeof value.line_width === 'number'
      ? value.line_width
      : typeof value.line_width === 'string'
        ? parseInt(value.line_width, 10)
        : NaN;
    const isValidWidth =
      Number.isInteger(parsedLineWidth) && parsedLineWidth >= 1 && parsedLineWidth <= 50;
    this.lineWidth = isValidWidth ? parsedLineWidth : 3;
    this.commandTextOn = typeof value.command_text_on === 'boolean' ? value.command_text_on : true;
    this.actionTextOn = typeof value.action_text_on === 'boolean' ? value.action_text_on : true;
    this.trailOn = typeof value.trail_on === 'boolean' ? value.trail_on : true;

    const parseGesture = (val: unknown, defaultValue: string): string =>
      typeof val === 'string' && /^[RDLU]*$/.test(val) ? val : defaultValue;

    this.gestureCloseTab = parseGesture(value.gesture_close_tab, '');
    this.gestureCloseTabWithoutPinned = parseGesture(value.gesture_close_tab_without_pinned, 'DR');
    this.gestureNewTab = parseGesture(value.gesture_new_tab, 'D');
    this.gestureNewTabBackground = parseGesture(value.gesture_new_tab_background, '');
    this.gestureDuplicateTab = parseGesture(value.gesture_duplicate_tab, '');
    this.gesturePinTab = parseGesture(value.gesture_pin_tab, '');
    this.gestureReload = parseGesture(value.gesture_reload, 'DU');
    this.gestureForward = parseGesture(value.gesture_forward, 'R');
    this.gestureBack = parseGesture(value.gesture_back, 'L');
    this.gestureScrollTop = parseGesture(value.gesture_scroll_top, '');
    this.gestureScrollBottom = parseGesture(value.gesture_scroll_bottom, '');
    this.gestureLastTab = parseGesture(value.gesture_last_tab, '');
    this.gestureReloadAll = parseGesture(value.gesture_reload_all, '');
    this.gestureNextTab = parseGesture(value.gesture_next_tab, '');
    this.gesturePrevTab = parseGesture(value.gesture_prev_tab, '');
    this.gestureCloseRightTabWithoutPinned =
      parseGesture(value.gesture_close_right_tab_without_pinned, '');
    this.gestureCloseRightTab = parseGesture(value.gesture_close_right_tab, '');
    this.gestureCloseLeftTabWithoutPinned =
      parseGesture(value.gesture_close_left_tab_without_pinned, '');
    this.gestureCloseLeftTab = parseGesture(value.gesture_close_left_tab, '');
    this.gestureCloseAllBackground = parseGesture(value.gesture_close_all_background, '');
    this.gestureCloseAll = parseGesture(value.gesture_close_all, '');
    this.gestureOpenOption = parseGesture(value.gesture_open_option, 'RDLU');
    this.gestureOpenExtension = parseGesture(value.gesture_open_extension, 'RDL');

    this.gestureWindowMaximize = parseGesture(value.gesture_window_maximize, '');
    this.gestureWindowMinimize = parseGesture(value.gesture_window_minimize, '');
    this.gestureWindowNormalize = parseGesture(value.gesture_window_normalize, '');
  }

  /**
     * @return {object}
     */
  public serialize(): object {
    return {
      action_text_on: this.actionTextOn,
      color_code: this.colorCode,
      command_text_on: this.commandTextOn,
      enabled: this.enabled,
      gesture_back: this.gestureBack,
      gesture_close_all: this.gestureCloseAll,
      gesture_close_all_background: this.gestureCloseAllBackground,

      gesture_close_left_tab: this.gestureCloseLeftTab,
      gesture_close_left_tab_without_pinned: this.gestureCloseLeftTabWithoutPinned,
      gesture_close_right_tab: this.gestureCloseRightTab,
      gesture_close_right_tab_without_pinned: this.gestureCloseRightTabWithoutPinned,
      gesture_close_tab: this.gestureCloseTab,
      gesture_close_tab_without_pinned: this.gestureCloseTabWithoutPinned,
      gesture_duplicate_tab: this.gestureDuplicateTab,
      gesture_forward: this.gestureForward,
      gesture_last_tab: this.gestureLastTab,
      gesture_new_tab: this.gestureNewTab,
      gesture_new_tab_background: this.gestureNewTabBackground,
      gesture_next_tab: this.gestureNextTab,
      gesture_open_extension: this.gestureOpenExtension,
      gesture_open_option: this.gestureOpenOption,
      gesture_pin_tab: this.gesturePinTab,
      gesture_prev_tab: this.gesturePrevTab,
      gesture_reload: this.gestureReload,
      gesture_reload_all: this.gestureReloadAll,
      gesture_scroll_bottom: this.gestureScrollBottom,
      gesture_scroll_top: this.gestureScrollTop,
      gesture_window_maximize: this.gestureWindowMaximize,
      gesture_window_minimize: this.gestureWindowMinimize,
      gesture_window_normalize: this.gestureWindowNormalize,

      language: this.language,
      line_width: this.lineWidth,
      trail_on: this.trailOn,
      // gesture_restart: '',
    };
  }

  /**
     * @return {string}
     */
  public toJson(): string {
    return JSON.stringify(this.serialize());
  }
}

export default Option;
