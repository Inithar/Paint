import './tool-bar.css'
import '../lib/jscolor.js'

import circleIcon from '../icons/circle.svg'
import hexagonIcon from '../icons/hexagon.svg'
import lineIcon from '../icons/line.svg'
import rectangleIcon from '../icons/rectangle.svg'
import squareIcon from '../icons/square.svg'
import triangleIcon from '../icons/triangle.svg'

export const generateToolBarMarkup = () => `
  <div class="tool-bar">
    <div class="active-tool-box">
      <span class="active-tool">Brush</span>
    </div>

    <div class="size-tool-box tool-box">
      <i class="fas fa-brush" title="Brush"></i>
      <i class="fas fa-eraser" title="Eraser"></i>
      <i class="fab fa-tumblr" title="Text"></i>
    </div>

    <div class="brush-size-box">
      <div class="size">
        <span class="brush-size" title="Brush Size">10</span>
      </div>
      <input type="range" min="1" max="50" value="10" class="slider" />
    </div>

    <div class="tool-box-one tool-box">
      <i class="fas fa-fill-drip" title="Background Color"></i>
      <label for="photo-input">
        <i class="fas fa-images" title="Photo"></i>
      </label>
      <i class="fas fa-download" title="Save Local Storage"></i>
      <i class="fas fa-upload" title="Load Local Storage"></i>
    </div>

    <div class="tool-box-two tool-box">
      <input id="photo-input" type="file" class="upload-photo-btn" />
      <i class="fas fa-undo-alt" title="Undo"></i>
      <i class="far fa-times-circle" title="Clear"></i>
      <i class="fas fa-trash-alt" title="Clear Local Storage"></i>
      <a class="download">
        <i class="far fa-save" title="Download"></i>
      </a>
    </div>

    <div class="shapes-container">
      <div class="shapes-box">
        <div class="shapes-box-content">
          <div class="shape-icons">
            <div class="shape-icons-one">
              <img class="shape-icon" src="${lineIcon}" alt="Line icon" />
              <img class="shape-icon" src="${squareIcon}" alt="Square icon" />
              <img class="shape-icon" src="${circleIcon}" alt="Circle icon" />
            </div>
            
            <div class="shape-icons-two">
              <img class="shape-icon" src="${triangleIcon}" alt="Triangle icon" />
              <img class="shape-icon" src="${rectangleIcon}" alt="Rectangle icon" />
              <img class="shape-icon" src="${hexagonIcon}" alt="Hexagon icon" />
            </div>
          </div>
          
          <div class="shape-settings">
            <label class="shape-settings-box shape-settings-box-first">
              <span>Outline</span>
              <input type="checkbox" checked="checked" class="outline-checkbox" />
              <span class="checkmark"></span>
            </label>

            <label class="shape-settings-box">
              <span>Fill</span>
              <input type="checkbox" class="fill-checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="colors-box">
      <div class="color-box">
        <input data-jscolor="{}" class="jscolor color-one" value="A51DAB" />
        <p class="color-header">Color 1</p>
      </div>
      <div class="color-box">
        <input data-jscolor="{}" class="jscolor color-two" value="ffffff" />
        <p class="color-header">Color 2</p>
      </div>
    </div>
  </div>
`