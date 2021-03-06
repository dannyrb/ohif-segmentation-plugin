import React from 'react';
import cornerstoneTools from 'cornerstone-tools';
import { Icon } from 'react-viewerbase';
import './roiContourMenu.styl';

const modules = cornerstoneTools.store.modules;

/**
 * @class RoiContourSettings - A component that allows the user to change
 * configuration of the freehand3D tools.
 */
export default class RoiContourSettings extends React.Component {
  constructor(props = {}) {
    super(props);

    const { interpolate, displayStats } = modules.freehand3D.state;

    this.state = {
      interpolate,
      displayStats,
    };

    this.onDisplayStatsToggleClick = this.onDisplayStatsToggleClick.bind(this);
    this.onInterpolateToggleClick = this.onInterpolateToggleClick.bind(this);
  }

  /**
   * onDisplayStatsToggleClick - A Callback that toggles the display of stats
   * window on the Freehand3DTool.
   *
   * @returns {null}
   */
  onDisplayStatsToggleClick() {
    modules.freehand3D.setters.toggleDisplayStats();

    this.setState({ displayStats: modules.freehand3D.state.displayStats });
  }

  /**
   * onInterpolateToggleClick - A callback that toggles interpolation mode for
   * the Freehand3DTool.
   *
   * @returns {null}
   */
  onInterpolateToggleClick() {
    modules.freehand3D.setters.toggleInterpolate();

    this.setState({ interpolate: modules.freehand3D.state.interpolate });
  }

  render() {
    const { interpolate, displayStats } = this.state;

    return (
      <div
        style={{
          backgroundColor: 'var(--ui-gray-dark)',
          outline: '1px solid var(--ui-border-color)',
          borderRadius: '4px',
        }}
        className="roi-contour-menu-footer"
      >
        <h3>Settings</h3>
        <div
          style={{ cursor: 'select' }}
          onClick={this.onInterpolateToggleClick}
        >
          <label>
            {interpolate ? <Icon name="check" /> : <Icon name="times" />}
            Interpolation
          </label>
        </div>

        {/* <div onClick={this.onDisplayStatsToggleClick}>
          <svg>
            <use
              xlinkHref={
                displayStats
                  ? 'assets/icons.svg#icon-freehand-stats-on'
                  : 'assets/icons.svg#icon-freehand-stats-off'
              }
            />
          </svg>
          <label>Stats</label>
        </div> */}
      </div>
    );
  }
}
