package io.konga.quickstart.model;

import io.konga.metadata.annotations.ApiPath;
import io.konga.metadata.annotations.Createable;
import io.konga.metadata.annotations.Defaults;
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

@Entity("todo")
@Label("TODO Item")
@Searchable
@Createable
@Editable
@Deleteable
@ApiPath("todos")
public class Todo {

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
	@Label("User ID")
	@Searchable
	@ShowInResults
	@Type(DataTypes.NUMBER)
	@FieldType(FieldTypes.NUMBER)
	private Integer userId;
	
	@Field
	@Label("Title")
	@EntityLabel
	@ShowInResults
	@ShowInUpdate
	@Required
	@Editable
	private String title;
	
	@Field
	@Label("Completed")
	@Searchable
	@ShowInResults
	@ShowInUpdate
	@Type(DataTypes.BOOLEAN)
	@Defaults("false")
	@FieldType(search=FieldTypes.BOOLEAN, results=FieldTypes.BOOLEAN, update=FieldTypes.SWITCH)
	private Boolean completed;
}
