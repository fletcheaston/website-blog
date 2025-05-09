import{j as e,bk as o,I as s,bl as n}from"./main-D-g3Tf5-.js";import{C as i}from"./code-block-BGOOd7ab.js";import{B as a}from"./layout-CijrSIdx.js";import{H as t}from"./header-DEPdYpa4.js";import"./button-A68ny3UQ.js";const l="/blog/games/utilities/drag-and-drop/input-map.png",r="/blog/games/utilities/drag-and-drop/node-signals.png",h="/blog/games/utilities/drag-and-drop/scene.png",x=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:o.fullPath}),e.jsx(t,{hash:"goals",children:"Goals"}),e.jsx("p",{children:"Here's the interaction sequence I want to enable:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"I move my mouse over the egg."}),e.jsx("li",{children:"The cursor indicates that I can interact with the egg."}),e.jsx("li",{children:"I click and hold on my mouse over the egg."}),e.jsx("li",{children:"The cursor indicates that I'm holding onto the egg."}),e.jsx("li",{children:"I move my mouse while holding down on the mouse button."}),e.jsx("li",{children:"The egg follows my mouse around the screen with a maximum speed."}),e.jsx("li",{children:"I let go of my mouse."}),e.jsx("li",{children:"The cursor indicates that I'm no longer holding the egg."}),e.jsx("li",{children:"The egg stops moving."})]}),e.jsx("br",{}),e.jsx(t,{hash:"approach",children:"Approach"}),e.jsx(s,{src:h,alt:"The Godot scene. I have an Area2D named 'Egg', which has two children; a Sprite2D, and a CollisionShape2D.",className:"inline-flex w-[320px] max-w-[50%] justify-center"}),e.jsx("br",{}),e.jsx(s,{src:l,alt:"The Input Map configuration. I have an action named 'mousedown' that is triggered by the 'Left Mouse Button'.",className:"inline-flex w-[600px] max-w-[50%] justify-center"}),e.jsx("br",{}),e.jsx(s,{src:r,alt:"The Node Signals enabled for the Area2D. The signal 'mouse_entered()' is connected to the '_on_mouse_entered()' function. The signal 'mouse_exited()' is connected to the '_on_mouse_exited()' function.",className:"inline-flex w-[500px] max-w-[50%] justify-center"}),e.jsx("br",{}),e.jsx("p",{children:'The code should be fairly straightforward to follow. The only complex thing is making a distinction between "the mouse is over the egg" and "the mouse is holding the egg".'}),e.jsx("p",{children:`If we treat "mouse over" as equivalent to "mouse holding", we'll end up dropping the egg if the mouse moves to fast and exits the egg before it has time to catch up.`}),e.jsx(i,{language:"plaintext",attributes:{},content:`extends Area2D

var mouse_over = false
var mouse_held = false
var SPEED = 25


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass
	

# Called when the mouse enters the object.
func _on_mouse_entered():
	mouse_over = true

	Input.set_default_cursor_shape(Input.CURSOR_POINTING_HAND)


# Called when the mouse leaves the object.
func _on_mouse_exited():
	mouse_over = false
	
	if not mouse_held:
		Input.set_default_cursor_shape(Input.CURSOR_ARROW)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if mouse_over and Input.is_action_pressed('mousedown'):
		mouse_held = true
		Input.set_default_cursor_shape(Input.CURSOR_DRAG)

	if mouse_held and not Input.is_action_pressed("mousedown"):
		mouse_held = false

		if mouse_over:
			Input.set_default_cursor_shape(Input.CURSOR_POINTING_HAND)
		else:
			Input.set_default_cursor_shape(Input.CURSOR_ARROW)

	if mouse_held:
		global_position = global_position.lerp(get_global_mouse_position(), SPEED * delta)
`}),e.jsx("br",{}),e.jsx(t,{hash:"result",children:"Result"}),e.jsxs("video",{width:"441",height:"357",controls:!0,preload:"none",className:"rounded-lg shadow-md",children:[e.jsx("source",{src:n,type:"video/mp4"}),"Your browser cannot display this video."]}),e.jsx("br",{}),e.jsx(t,{hash:"whats-next",children:"What's Next"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The egg should respect where the mouse clicked on the egg and retain that.",e.jsx("ul",{children:e.jsx("li",{children:"i.e. if I click the very edge of the egg, the egg should follow the mouse such that it moves back to that position relative to the mouse."})})]}),e.jsx("li",{children:"The egg should have a center of gravity that it swings around when held, with gravity pulling it down."}),e.jsx("li",{children:"The egg should stay on the screen, you shouldn't be able to move it off-screen."})]})]})};export{x as component};
