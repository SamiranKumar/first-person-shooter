using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveBird : MonoBehaviour {

    public float horizontalSpeed;
    public float verticalSpeed;
    public float amplitude;
    public Vector3 tempPosition;
    // Use this for initialization
    void Start () {
        tempPosition = transform.position;
       // horizontalSpeed = tempPosition.x;
    verticalSpeed = tempPosition.y;
        

    }
	
	// Update is called once per frame
	void FixedUpdate () {
        tempPosition.x += horizontalSpeed;
        tempPosition.y = Mathf.Sin(Time.realtimeSinceStartup * verticalSpeed) * amplitude +3;

        transform.position = tempPosition;
    }
}
