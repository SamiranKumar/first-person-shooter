var EnemyHealth : int = 10;
function DeductPoint(DamageAmount : int){
	EnemyHealth -= DamageAmount; //DamageAmount
}

function Update () {
	if(EnemyHealth <= 0){
		Destroy(gameObject);
	}
}
