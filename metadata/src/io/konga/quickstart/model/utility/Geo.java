package io.konga.quickstart.model.utility;

import io.konga.metadata.annotations.Access;
import io.konga.metadata.annotations.Entity;
import io.konga.metadata.annotations.Label;
import io.konga.metadata.definition.enumerations.AccessModes;

@Entity("album")
@Label("Geo")
@Access(AccessModes.HIDDEN)
public class Geo {

	private String lat;
	
	private String lng;
}
