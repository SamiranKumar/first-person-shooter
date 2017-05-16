var DamageAmount : int = 5;
var TargetDistances : float ; 
var AllowedRange : float = 15;

function Update () {
	 if(Input.GetButtonDown("Fire1")) {
	 	var Shot : RaycastHit;
	 	if(Physics.Raycast (transform.position,transform.TransformDirection(Vector3.forward) , Shot)){
	 	 TargetDistances = Shot.distance;
	 		if(TargetDistances < AllowedRange){
	 			Shot.transform.SendMessage("DeductPoint",DamageAmount,SendMessageOptions.DontRequireReceiver);
	 		}
	 	}
	 }
}
