package io.konga.quickstart.model.utility;

import io.konga.metadata.annotations.Access;
import io.konga.metadata.annotations.Entity;
import io.konga.metadata.annotations.Label;
import io.konga.metadata.definition.enumerations.AccessModes;

@Entity("company")
@Label("Company")
@Access(AccessModes.HIDDEN)
public class Company {

	private String name;
	
	private String catchPhrase;
	
	private String bs;
}
