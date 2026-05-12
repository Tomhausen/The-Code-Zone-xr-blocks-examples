enum Direction {
    forward,
    backward,
    up,
    down,
    left,
    right
}

enum Axis { x, y, z }

enum Physics {
    //% block="ax (x acceleration)"
    ax, 
    //% block="ay (y acceleration)"
    ay,
    //% block="az (z acceleration)"
    az,
    //% block="dx (x deceleration)"
    dx,
    //% block="dy (y deceleration)"
    dy,
    //% block="dz (z deceleration)"
    dz,
}

enum Angles {yaw, roll, pitch}

//% color="#4B7BEC"
//% groups="['basic', 'advanced]"
namespace movement {

    //% blockId=moveDirectionAtSpeed
    //% block="move $direction at speed $speed"
    //% weight=100
    //% group='basic'
    export function moveDirectionAtSpeed(direction: Direction, speed: number) {

    }

    //% blockId=moveDirectionAtSpeedFor
    //% block="move $direction at speed $speed for $seconds"
    //% weight=99
    //% group='basic'
    export function moveDirectionAtSpeedFor(direction: Direction, speed: number, seconds: number){
        
    }


    //% blockId=turnClockwise
    //% block="turn clockwise $degrees degrees"
    //% weight=94
    //% group='basic'
    export function turnClockwise(degrees: number) {

    }

    //% blockId=turnAntiClockwise
    //% block="turn anticlockwise $degrees degrees"
    //% weight=93
    //% group='basic'
    export function turnAntiClockwise(degrees: number) {

    }

    //% blockId=pointInDirection
    //% block="point in direction $degrees"
    //% weight=92
    //% group='basic'
    export function pointInDirection(degrees: number){

    }

    //% blockId=goToXY
    //% block="go to x: $x y: $y z: $z"
    //% weight=79
    //% group='basic'
    export function goToXYZ(x: number, y: number, z: number) {

    }

    //% blockId=setAxis
    //% block="set $axis to $value"
    //% weight=77
    //% group='basic'
    export function setAxis(axis: Axis, value: number) {

    }

    //% blockId=changeAxis
    //% block="change $axis by $value"
    //% weight=76
    //% group='basic'
    export function changeAxis(axis: Axis, value: number) {

    }

    //% blockId=stopMoving
    //% block="stop moving"
    //% weight=1
    //% group='basic'
    export function stopMoving(){

    }

    //% blockId=setPhysicsPropertyTo
    //% block="set $physicsProperty to $value"
    //% weight=86
    //% group='advanced'
    export function setPhysicsPropertyTo(physicsProperty: Physics, value: number) {

    }

    //% blockId=changePhysicsPropertyBy
    //% block="change $physicsProperty by $value"
    //% weight=85
    //% group='advanced'
    export function changePhysicsPropertyBy(physicsProperty: Physics, value: number) {

    }

    //% blockId=setAngleTo
    //% block="set $angle to $degrees"
    //% weight=81
    //% group='advanced'
    export function setAngleTo(angle: Angles, degrees: number){

    }

    //% blockId=changeAngleBy
    //% block="change $angle by $degrees"
    //% weight=80
    //% group='advanced'
    export function changeAngleBy(angle: Angles, degrees: number) {

    }


}