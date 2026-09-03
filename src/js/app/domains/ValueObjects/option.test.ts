import Option from './option';

describe('Option', () => {
  it('should initialize with default values when empty object is passed', () => {
    const opt = new Option({});

    expect(opt.enabled).toBe(true);
    expect(opt.language).toBe('Japanese');
    expect(opt.colorCode).toBe('#FF0000');
    expect(opt.lineWidth).toBe(3);
    expect(opt.commandTextOn).toBe(true);
    expect(opt.actionTextOn).toBe(true);
    expect(opt.trailOn).toBe(true);
    expect(opt.gestureCloseTabWithoutPinned).toBe('DR');
    expect(opt.gestureNewTab).toBe('D');
    expect(opt.gestureReload).toBe('DU');
  });

  it('should override defaults and serialize to JSON', () => {
    const opt = new Option({
      action_text_on: false,
      color_code: '#00FF00',
      command_text_on: false,
      enabled: false,
      gesture_close_tab: 'D',
      language: 'English',
      line_width: 5,
      trail_on: false,
    });

    expect(opt.enabled).toBe(false);
    expect(opt.language).toBe('English');
    expect(opt.colorCode).toBe('#00FF00');

    const serialized = opt.serialize();
    expect(serialized).toHaveProperty('enabled', false);
    expect(opt.toJson()).toBe(JSON.stringify(serialized));
  });

  it('should fallback to default values for invalid inputs', () => {
    const opt = new Option({
      color_code: 'invalid_color',
      enabled: 'not_a_boolean',
      gesture_close_tab_without_pinned: 'INVALID_COMMAND_123',
      gesture_new_tab: '<script>alert(1)</script>',
      language: 'Spanish',
      line_width: -5,
    });
    expect(opt.colorCode).toBe('#FF0000');
    expect(opt.lineWidth).toBe(3);
    expect(opt.enabled).toBe(true);
    expect(opt.language).toBe('Japanese');
    expect(opt.gestureNewTab).toBe('D');
    expect(opt.gestureCloseTabWithoutPinned).toBe('DR');

    const validShortHex = new Option({ color_code: '#abc', line_width: '10' });
    expect(validShortHex.colorCode).toBe('#abc');
    expect(validShortHex.lineWidth).toBe(10);
  });
});
