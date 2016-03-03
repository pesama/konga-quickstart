package io.konga.quickstart.model.utility;

import io.konga.metadata.annotations.Access;
import io.konga.metadata.annotations.Editable;
import io.konga.metadata.annotations.Entity;
import io.konga.metadata.annotations.Field;
import io.konga.metadata.annotations.FieldType;
import io.konga.metadata.annotations.Label;
import io.konga.metadata.annotations.Raw;
import io.konga.metadata.annotations.Required;
import io.konga.metadata.annotations.ShowInUpdate;
import io.konga.metadata.annotations.Type;
import io.konga.metadata.definition.enumerations.AccessModes;
import io.konga.metadata.definition.enumerations.DataTypes;
import io.konga.metadata.definition.enumerations.FieldTypes;

@Entity("address")
@Label("Address")
@Access(AccessModes.HIDDEN)
public class Address {

	@Field
	@Label("Street")
	@ShowInUpdate
	@Required
	@Editable
	private String street;
	
	@Field
	@Label("Suite")
	@ShowInUpdate
	@Editable
	private String suite;
	
	@Field
	@Label("City")
	@ShowInUpdate
	@Required
	@Editable
	private String city;
	
	@Field
	@Label("zipCode")
	@ShowInUpdate
	@Required
	@Editable
	private String zipCode;
	
	@Field
	@Label("Map")
	@ShowInUpdate(configuration=@Raw(key="CUSTOM_FIELD_TYPE", value="GOOGLE_MAPS_FIELDTYPE"))
	@Type(value=DataTypes.COMPLEX, complexType="geo")
	@FieldType(FieldTypes.CUSTOM)
	private Geo geo;
}
