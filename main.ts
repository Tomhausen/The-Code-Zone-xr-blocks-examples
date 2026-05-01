

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

    //% blockId=moveForwardAtSpeed
    //% block="move forward at speed $speed for $seconds"
    //% weight=100
    //% group='basic'
    export function moveForwardAtSpeed(speed: number, seconds: number){
        
    }

    //% blockId=moveBackwardAtSpeed
    //% block="move backward at speed $speed for $seconds"
    //% weight=99
    //% group='basic'
    export function moveBackwardAtSpeed(speed: number, seconds: number) {
    }

    //% blockId=moveLeftAtSpeed
    //% block="move left at speed $speed for $seconds"
    //% weight=98
    //% group='basic'
    export function moveLeftAtSpeed(speed: number, seconds: number) {

    }

    //% blockId=moveRightAtSpeed
    //% block="move right at speed $speed for $seconds"
    //% weight=97
    //% group='basic'
    export function moveRightAtSpeed(speed: number, seconds: number) {

    }

    //% blockId=moveUpAtSpeed
    //% block="move up at speed $speed for $seconds"
    //% weight=96
    //% group='basic'
    export function moveUpAtSpeed(speed: number, seconds: number) {

    }

    //% blockId=moveDownAtSpeed
    //% block="move down at speed $speed for $seconds"
    //% weight=95
    //% group='basic'
    export function moveDownAtSpeed(speed: number, seconds: number) {

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
    //% block="go to x: $x y: $y"
    //% weight=79
    //% group='basic'
    export function goToXY(x: number, y: number) {

    }

    //% blockId=changeY
    //% block="change y by $y"
    //% weight=78
    //% group='basic'
    export function changeY(y: number) {

    }

    //% blockId=setX
    //% block="set x to $x"
    //% weight=77
    //% group='basic'
    export function setX(x: number) {

    }

    //% blockId=changeX
    //% block="change x by $x"
    //% weight=76
    //% group='basic'
    export function changeX(x: number) {

    }

    //% blockId=setY
    //% block="set y to $y"
    //% weight=75
    //% group='basic'
    export function setY(y: number) {

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