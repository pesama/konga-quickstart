package io.konga.quickstart.model;

import io.konga.metadata.annotations.ApiPath;
import io.konga.metadata.annotations.Createable;
import io.konga.metadata.annotations.Deleteable;
import io.konga.metadata.annotations.Editable;
import io.konga.metadata.annotations.Entity;
import io.konga.metadata.annotations.EntityId;
import io.konga.metadata.annotations.EntityKey;
import io.konga.metadata.annotations.EntityLabel;
import io.konga.metadata.annotations.Field;
import io.konga.metadata.annotations.FieldType;
import io.konga.metadata.annotations.Label;
import io.konga.metadata.annotations.Required;
import io.konga.metadata.annotations.Searchable;
import io.konga.metadata.annotations.ShowInResults;
import io.konga.metadata.annotations.ShowInUpdate;
import io.konga.metadata.annotations.Type;
import io.konga.metadata.definition.enumerations.DataTypes;
import io.konga.metadata.definition.enumerations.FieldTypes;
import io.konga.quickstart.model.utility.Address;
import io.konga.quickstart.model.utility.Company;

@Entity("user")
@Label("User")
@Searchable
@Createable
@Editable
@Deleteable
@ApiPath("users")
public class User {

	@Field
	@Label("id")
	@EntityId
	@EntityKey
	@ShowInResults
	@ShowInUpdate
	@Type(DataTypes.NUMBER)
	@FieldType(FieldTypes.NUMBER)
	private Integer id;
	
	@Field
	@Label("Name")
	@EntityLabel
	@ShowInResults
	@ShowInUpdate
	@Required
	@Editable
	private String name;
	
	@Field
	@Label("Email")
	@Searchable
	@ShowInResults
	@ShowInUpdate
	@Required
	@Editable
	private String email;
	
	@Field
	@Label("Address")
	@ShowInUpdate(fields={"street", "suite", "city", "zipCode", "geo"})
	@Type(value=DataTypes.COMPLEX, complexType="address")
	@FieldType(FieldTypes.COMPLEX)
	private Address address;
	
	@Field
	@Label("Phone")
	@Searchable
	@ShowInResults
	@ShowInUpdate
	@Required
	@Editable
	private String phone;
	
	@Field
	@Label("website")
	@Searchable
	@ShowInResults
	@ShowInUpdate
	@Editable
	private String website;
	
	@Field
	@Label("Company")
	@ShowInUpdate(fields={"name", "catchPhrase", "bs"})
	@Type(value=DataTypes.COMPLEX, complexType="company")
	@FieldType(FieldTypes.COMPLEX)
	private Company company;
}
